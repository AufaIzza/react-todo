export function Todo(props) {
    return(
        <div className="Todo">
            <p>{props.todo}</p>
            <p>{props.completion}</p>
        </div>
    )
}