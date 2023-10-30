import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoContainer } from "./context";

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos((prevTodos) => [todo, ...prevTodos]);
    };

    const updateTodo = (id, todoText) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id == id ? { ...todo, todoText: todoText } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id == id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContainer
            value={{addTodo, updateTodo, deleteTodo, toggleComplete}}
        >
            <div className="container mx-auto m-4 p-4 border-2">
                <p className="text-3xl text-center mb-4">Manage Your Todo</p>
                <TodoForm />
                {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </div>
        </TodoContainer>
    );
}
export default App;
