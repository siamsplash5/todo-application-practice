/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoText: "todo message",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todoText) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoContainer = TodoContext.Provider;
