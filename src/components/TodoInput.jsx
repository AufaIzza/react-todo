import { useState } from "react"

export function TodoInput(props) {
    const [value, setValue] = useState({})
    const [Id, setId] = useState(0)
    const [input, setInput] = useState("")

    return (
        <div className="TodoInput">
            <form action="post" className="TodoInputForm" onSubmit={(e) => {
                e.preventDefault()
                setId(Id + 1)
                setInput("")
                props.sendInput([...props.getInput, value])
            }}>
                <label htmlFor="Input">Input Todo</label>
                <div className="TodoInputFormInput">
                    <input type="text" name="Input" id="Input" value={input} onChange={(e) => {
                        setInput(e.target.value)
                        setValue({
                            "Id": Id,
                            "todo": e.target.value,
                            "completion": 2
                        })
                        
                    }}/>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}