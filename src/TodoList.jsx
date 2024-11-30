import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newToDo, setNewToDo] = useState("");

    let addNewTask = () =>{
        setTodos(
            (prevToDos) => {
                return [...prevToDos, {task: newToDo, id: uuidv4()}]
            }
        );
        setNewToDo("");
    }

    let updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    };

    let deleteToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => prevTodos.map((prevTodo) =>{
            return {
                ...prevTodo, 
                task: prevTodo.task.toUpperCase()
            }
    }));
    }

    let markDoneAll = () => {
        
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => prevTodos.map((prevTodo) =>{
            if(prevTodo.id == id){
                return {
                    ...prevTodo, 
                    task: prevTodo.task.toUpperCase()
                }
            }else{
                return prevTodo;
            }
            
    }));
    }

    return (
        <div>
            <input placeholder="add a task" value={newToDo} onChange={updateToDoValue} />&nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <h4>Tasks To-Do</h4>
            
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span>&nbsp;&nbsp;
                            {/* by using arrow function here, the method doesn't execute immediatly! */}
                            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>upperCase One</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>Upper Case All</button>
            <button onClick={markDoneAll}>Mark All As Done</button>
        </div>
    )
}