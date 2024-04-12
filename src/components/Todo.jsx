export function Todo(props) {
    function selectionOptions(value) {
            return (
                <div>
                    <select name="move" id="move" defaultValue={value}>
                        <option value="0">Not Completed</option>
                        <option value="1">In Progress</option>
                        <option value="2">Completed</option>
                    </select>
                </div>
            )
    }

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
                        {selectionOptions(props.completion)}
                    </div>
                    <button type="submit" >Delete</button>
                </div>

            </form>
            
        </div>
    )
}