import React from "react";
import Container from "react-bootstrap/Container";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputFIeld: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
    return (
        <>
            <Container>
                <div className="box">
                    <h3 className="todo__title">What's your plans for Today?</h3>
                    <form className="todo__form" onSubmit={handleSubmit}>
                        <input
                            className="form__input"
                            type="text"
                            placeholder="Write your task..."
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                        <button className="form__btn" type="submit">
                            Add
                        </button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default InputFIeld;
