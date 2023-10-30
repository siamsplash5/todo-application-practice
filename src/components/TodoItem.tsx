import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    console.log(todo);
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.todoText);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, todoText);
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`container flex justify-center mx-auto p-4 m-4 ${
                todo.completed ? "bg-green-200" : "bg-purple-200"
            }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
            />{" "}
            <div className="w-[750px] px-2">
                {isTodoEditable ? (
                    <input
                        type="text"
                        className="w-[640px]"
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                ) : (
                    <span className="">{todoText}</span>
                )}
            </div>
            <button
                type="button"
                className="bg-yellow-500 mx-2 px-2 rounded"
                onClick={() => {
                    if (todo.completed) return;

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
