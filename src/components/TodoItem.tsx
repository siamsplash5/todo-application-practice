import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.todoText);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = ()=>{
        updateTodo(todo.id, todoText);
        setIsTodoEditable(false);
    }

    const toggleCompleted = ()=>{
        toggleComplete(todo.id);
    }
    

    return (
        <div className="container mx-auto p-4 m-4 bg-purple-200">
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={toggleCompleted}
            />{" "}
            <input
                type="text"
                className="w-[750px] bg-purple-200 px-2"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                readOnly={!isTodoEditable}
            />{" "}
            <button
                type="button"
                className="bg-yellow-500 mx-2 px-2 rounded"
                onClick={() => {
                    if (todo.complete) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
            >
                {isTodoEditable ? "Save" : "Edit"}
            </button>{" "}
            <button
                type="button"
                className="bg-red-400 mx-2 px-2 rounded"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>{" "}
        </div>
    );
}

export default TodoItem;
