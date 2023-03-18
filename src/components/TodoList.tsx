import React from "react";
import Container from "react-bootstrap/Container";
import { Todo } from "../types/model";

import TodoCard from "./TodoCard";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todo__list">
            <Container>
                {todos.map((todo) => (
                    <TodoCard todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
                ))}
            </Container>
        </div>
    );
};

export default TodoList;
