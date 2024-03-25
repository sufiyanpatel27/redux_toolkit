import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
    return(
        <form onSubmit={addTodoHandler} className="mt-20 flex gap-2">
            <input className="w-full" type="text" placeholder="enter todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">add</button>
        </form>
    )
}

export default AddTodo