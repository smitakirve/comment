import { useState } from "react"
import {v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample task", id: uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
       setTodos((prevTodo)=>{
        return [...prevTodo,{task:newTodo, id: uuidv4(),isDone:false}]
    })
       setNewTodo("")
    }

    let updateTodo=(event)=>{
        setNewTodo(event.target.value);
    };
     let deleteTodo =(id) =>{
       setTodos( (prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
     };

    // let upperCaseAll =()=>{
    //   setTodos((prevTodos)=> (

    //     prevTodos.map((todo)=>{
    //     return{
    //         ...todo,
    //         task: todo.task.toUpperCase()
    //     }
    //   })
    //  ))
    // };

    // let upperCaseOne=(id)=>{
    //     setTodos((prevTodos)=> (

    //         prevTodos.map((todo)=>{
    //             if(todo.id == id ){
    //                 return{
    //                     ...todo,
    //                     task: todo.task.toUpperCase()
    //                 }
    //             }else{
    //                 return todo;
    //             }
           
    //       })
    //     ))
    // }
    let markAsDone =()=>{
        setTodos((prevTodos)=> (
  
          prevTodos.map((todo)=>{
          return{
              ...todo,
              isDone:true
          }
        })
       ))
      };
      
      let markAsDoneOne =(id)=>{
        setTodos((prevTodos)=> (
  
          prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true
                }
            }else{
                return todo;
            }
          
        })
       ))
      };
  

    return(
        <div>
        <input placeholder="add new task" value={newTodo} onChange={updateTodo}></input>
        <br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h4>Tasks</h4>
        <ul>
            {
                todos.map((todos) => {
                    return <li key={todos.id}>
                        <span style={todos.isDone? {textDecoration:"line-through"}:{}}>{todos.task}</span>
                        &nbsp;
                        <button onClick={()=> deleteTodo(todos.id)}>delete</button>
                        {/* <button onClick={()=> upperCaseOne(todos.id)}>upperCase One</button> */}
                         <button onClick={()=> markAsDoneOne(todos.id)}>mark As Done One</button> 
                        </li>;

                })
            }
        </ul>
        <button onClick={markAsDone}>Mark all done</button>
        </div>
    )
} 
  