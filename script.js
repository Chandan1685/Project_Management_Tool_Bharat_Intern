function addTask() {
    event.preventDefault();

   
    
    var Name= document.getElementById("name").value;
    var IdentityNumber = document.getElementById("tname").value;
    var Taskassign = document.getElementById("tdesc").value;

    
    var taskElement = document.createElement("table");
    taskElement.className = "task";

    
    var taskContent = 
    `
    <tr>
    <th>Name</th>
     <th>IdentityNumber</th>
     <th>Taskassign</th>
     
     
     </tr>
        <tr>
        <td>${Name} </td>
        
        <td>${IdentityNumber}  </td>
        <td>${Taskassign}</td>
        
        <td><button class="delete-task">Done</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;


    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);


    document.getElementById("form").reset();

 
    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });
}


document.getElementById("form").addEventListener("submit", addTask);