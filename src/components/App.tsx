import React, { useState } from "react";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Todo } from "../types/model";

import Navbar from "./Navbar";
import InputField from "./InputField";
import TodoList from "./TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
    };

    return (
        <div className="App">
            <Navbar />
            <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
