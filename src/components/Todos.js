import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos);
    const [editOpt, setEditOpt] = useState(0);
    const [text, setText] = useState('');
    const [currId, setCurrId] = useState('');
    const [newText, setNewText] = useState('');
    const dispatch = useDispatch();

    const handleEdit = (todo) => {
        setEditOpt(1);
        setCurrId(todo.id);
        setText(todo.text);
    };

    const handleUpdate = () => {
        dispatch(updateTodo({ id: currId, text: newText }));
        setEditOpt(0);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-lg">Todos</div>
            {todos.map((todo) => (
                <div key={todo.key} className="w-full gap-10 flex-wrap max-w-xl flex justify-between items-center">
                    <div>{todo.text}</div>
                    <div className="flex gap-4 flex-wrap">
                        <button onClick={() => handleEdit(todo)} className="text-blue-500 hover:text-blue-700">Edit</button>
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 hover:text-red-700">Delete</button>
                    {/*  */}
                    </div>
                </div>
            ))}

            {editOpt === 1 && (
                <div className="w-full max-w-xl">
                    <input
                        placeholder="Update todo"
                        defaultValue={text}
                        onChange={(e) => setNewText(e.target.value)}
                        className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                    <button onClick={() => handleUpdate()} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2">Update</button>
                </div>
            )}
        </div>
    );
}

export default Todos;
