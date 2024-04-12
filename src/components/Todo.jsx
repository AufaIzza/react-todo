export function Todo(props) {
    return(
        <div className="Todo">
            <form action="post" onSubmit={(e) => {
                        e.preventDefault()
            }}>
                <div className="TodoTop">
                    <p>{props.todo}</p>
                </div>
                <div className="TodoBottom">
                    <div className="TodoBottomMove">
                        <label htmlFor="move">Move to</label>
                        <select name="move" id="move">
                            <option value="0">Not Completed</option>
                            <option value="1">In Progress</option>
                            <option value="2">Completed</option>
                        </select>
                    </div>
                    <button type="submit" >Delete</button>
                </div>

            </form>
            
        </div>
    )
}