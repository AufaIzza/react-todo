import {useState} from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";

function TodoList() {
    const [todos, settodos] = useState([])

    function completion(value) {
        if (value == 0) {
            return "Not Completed"
        } else if (value == 1) {
            return "In Progress"
        } else if (value == 2) {
            return "Completed"
        } else {
            return "Error"
        }
    }

    return(
        <div className="TodoList">
            <TodoInput sendInput={settodos} getInput={todos}/>

            { todos.map((e) => {
                return(
                    <Todo key={e.id} todo={e.todo} completion={completion(e.completion)}/>
                )
            })}
        </div>
    )
}

export default TodoList;