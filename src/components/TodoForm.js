import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="TodoInput" value={value} placeholder="What is the task today?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="TodoBtn" style={{marginLeft: '0.5rem'}}>Add Task</button>
        </form>
    )
}

export default TodoForm;