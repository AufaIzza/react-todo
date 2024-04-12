import {useState} from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";

function TodoList() {
    const [todos, settodos] = useState([])

    return(
        <div className="TodoList">
            <TodoInput sendInput={settodos} getInput={todos}/>

            <div className="Todos">
                <div id="Not-completed" className="TodosDiv">
                    <h2>Not Completed</h2>
                    { todos.map((e) => {
                        if (e.completion === 0) {
                            return(
                                <Todo key={e.id} todo={e.todo}/>
                            )
                        }
                        else {
                            return
                        }
                    })}
                </div>
                <div id="In-progress" className="TodosDiv">
                    <h2>In Progress</h2>
                    { todos.map((e) => {
                        if (e.completion === 1) {
                            return(
                                <Todo key={e.id} todo={e.todo}/>
                            )
                        } else {
                            return
                        }
                    })}
                </div>
                <div id="Completed" className="TodosDiv">
                    <h2>Completed</h2>
                    { todos.map((e) => {
                        if (e.completion === 2) {
                            return(
                                <Todo key={e.id} todo={e.todo}/>
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