import React, {useState} from 'react';

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="TodoInput" placeholder='Update task' />
            <button type="submit" className="TodoBtn" style={{marginLeft: '0.5rem'}}>Update</button>
        </form>
    )
}

export default EditTodoForm;