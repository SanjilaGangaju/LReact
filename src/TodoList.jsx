import React, { useState } from 'react'

const TodoList = () => {
     const [todos, setTodo]=useState('');
     const [todoitem, setTodoItem] =useState([]);

     const inputValueHandler = (e)=>{
        
         setTodo(e.target.value);
           
     }


     const handleSubmit = (e)=>{

        e.preventDefault();
        if (todos.trim()===""){
            return;
        }
        setTodoItem((prevItem)=> [...prevItem, todos]);
        setTodo("");
          
       

     }

    
  return (
  

    <div>
        <h1>TodoForm</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" value={todos} placeholder="Enter your todo" onChange={(e)=>inputValueHandler(e)}></input>
      </form>
      <ul>
        {todoitem.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
      
    </div>
  )
}

export default TodoList
