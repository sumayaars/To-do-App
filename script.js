function addTask(){
    const taskInput= document.getElementById("taskInput");
    const taskValue=taskInput.value;
    localStorage.setItem("Task List",taskValue);
    if (taskValue=== "") {
        alert("Please enter a task");
        return;
    }
    //add task to the list
    const taskList=document.getElementById("taskList");
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.textContent=localStorage.getItem("Task List");
    span.textContent=taskValue;

//Edit

const editButton=document.createElement("button");
editButton.textContent="📝";
editButton.classList.add("edit");
editButton.addEventListener('click',function(){
    const newTask=prompt("Enter new task", span.textContent);
    localStorage.setItem("Task List",newTask);
    if (newTask===null || newTask==="") {
        return;
    }
    span.textContent=localStorage.getItem("Task List");
    span.textContent=newTask;
    
})

// delete

const deleteButton=document.createElement("button");
deleteButton.textContent="❌";
deleteButton.classList.add("delete");
deleteButton.addEventListener('click',function(){
    taskList.removeChild(li);
    localStorage.removeItem("Task List");
})


//complete
 
const completeButton=document.createElement("button");
completeButton.textContent="✅";
completeButton.classList.add("complete");
completeButton.addEventListener('click',function(){
    li.classList.toggle("completed");
})


    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);
    taskInput.value="";
}


document.getElementById("addTaskButton").addEventListener('click',addTask);
document.getElementById("taskInput").addEventListener('keypress',function(e){
    if (e.key==="Enter") {
        addTask();
    }
});