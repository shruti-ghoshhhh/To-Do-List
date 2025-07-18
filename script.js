const button=document.getElementById('addTask');
const input=document.getElementById('taskInput');
const list=document.getElementById('taskList');

button.addEventListener("click", function(){
    const task=input.value;
    
    if(task.trim()==="") return;

    const listItem=document.createElement("li");
    listItem.textContent=task;

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.style.marginLeft="10px";

    deleteBtn.addEventListener('click', function(){
        listItem.remove();
    });

    
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    input.value="";
});