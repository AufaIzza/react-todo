import {useState} from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";

function TodoList() {
    const [todos, settodos] = useState([])

    return(
        <div className="TodoList">
            <TodoInput sendInput={settodos} getInput={todos}/>

            { todos.map((e) => {
                return(
                    <Todo key={e.id} todo={e.todo} completion={e.completion}/>
                )
            })}
        </div>
    )
}

export default TodoList;