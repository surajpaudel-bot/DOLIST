//selecting elements to manipulate
const addtaskbtn=document.getElementById("addtaskbtn");
const taskinput=document.getElementById("taskinput");

// adding event lister to button
addtaskbtn.addEventListener("click",()=>{
    const task= taskinput.value
    if(task=== ""){
        alert("please enter a task");
        return;
    }
    console.log("Task added:", task);
    taskinput.value=""; //clears input after adding 

//creating new list
const li = document.createElement("li");
li.textContent=task;
document.getElementById("tasklist").appendChild(li);

})

