import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../types/model";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));

        setEdit(false);
    };

    useEffect(() => {
        editRef.current?.focus();
    }, [edit]);

    const editRef = useRef<HTMLInputElement>(null);

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <form className="todo__card" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input
                    ref={editRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todo__card-edit"
                />
            ) : (
                <span className="todo__card-text">{todo.todo}</span>
            )}
            <div
                className="todo__card-icons"
                onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}
            >
                <span
                    className="todo-icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <BiEdit size={25} />
                </span>
                <span className="todo-icon">
                    <BsTrash size={25} onClick={() => handleDelete(todo.id)} />
                </span>
            </div>
        </form>
    );
};

export default TodoCard;
