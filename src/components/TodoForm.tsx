import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
    const [todoText, setTodoText] = useState("");
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoText) return;
        addTodo({ id: Date.now(), todoText, completed: false });
        setTodoText("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="border-2 w-64 h-8 p-2"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />{" "}
            <button type="submit" className="bg-green-500 px-4 py-1 rounded">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
