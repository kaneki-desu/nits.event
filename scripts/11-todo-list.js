const todolist=[];


const renderTodolist=()=>{
    let todolist_text=``;
    for (let i = 0; i < todolist.length; i++) {
        const {name, dueDate} = todolist[i];
        todolist_text+=`<div>${name} </div><div> ${dueDate}</div>
    
            <button onclick=" 
             todolist.splice(${i},1);
             renderTodolist();
            " >Delete</button>
        `
        
    
        }
    const todolist_div= document.querySelector(".js-todo-list");
    todolist_div.innerHTML=`${todolist_text}`
}
renderTodolist();

const addTodo =()=>{
 const inputElement=document.querySelector('.container > input') ;
 const name=inputElement.value;
 
 const dateInputElement=document.querySelector(".js-due-date-input");
 const dueDate=dateInputElement.value;

 todolist.push({
                name,
                dueDate
                });
 inputElement.value="";
 dateInputElement.value="";

 renderTodolist();
    
}
