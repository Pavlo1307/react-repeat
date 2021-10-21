import {useState} from "react";
import App from "../App";

const CreateTodos = ({onSubmit}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={title}
                   onChange={({ target: { value } }) => setTitle(value)}
                   placeholder="todo title"/>
            <br/>
            <input type="text"
                   value={description}
                   onChange={({ target: { value } }) => setDescription(value)}
                   placeholder="todo description"/>

            <button type="submit" disabled={!title || !description}>create todo</button>
        </form>
    )
}

export default CreateTodos;
