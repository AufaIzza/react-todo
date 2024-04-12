import {useState} from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";

function TodoList() {
    const [todos, settodos] = useState([])

    function moveTodo(value, id, todo) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].Id == Number(id)) {
                todos.splice(i, 1)
            }
        }
        settodos([...todos, {
            "Id": todo.Id,
            "todo": todo.todo,
            "completion": Number(value)
        }])
        
    }

    function todo(e) {
        return (
            <Todo key={e.Id} todo={e} onChange={(i, id)=>{moveTodo(i.target.value, id, e)}}/>
        )
    }

    return(
        <div className="TodoList">
            <TodoInput sendInput={settodos} getInput={todos}/>

            <div className="Todos">
                <div id="Not-completed" className="TodosDiv">
                    <h2>Not Completed</h2>
                    { todos.map((e) => {
                        if (e.completion === 1) {
                            return(
                                todo(e)
                            )
                        } else {
                            return
                        }
                    })}
                </div>
                <div id="In-progress" className="TodosDiv">
                    <h2>In Progress</h2>
                    { todos.map((e) => {
                        if (e.completion === 2) {
                            return(
                                todo(e)
                            )
                        } else {
                            return
                        }
                    })}
                </div>
                <div id="Completed" className="TodosDiv">
                    <h2>Completed</h2>
                    { todos.map((e) => {
                        if (e.completion === 3) {
                            return(
                                todo(e)
                            )
                        } else {
                            return
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList;