import { useState } from "react"

export function TodoInput(props) {
    const [value, setValue] = useState({})
    const [id, setId] = useState(0)
    return (
        <div className="TodoInput">
            <form action="post" onSubmit={(e) => {
                e.preventDefault()
                props.sendInput([...props.getInput, value])
                setId(id + 1)
            }}>
                <label htmlFor="Input">Input Todo</label>
                <input type="text" name="Input" id="Input" onChange={(e) => {
                    setValue({
                        "id": id,
                        "todo": e.target.value,
                        "completion": "Not Started"
                    })
                }}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}