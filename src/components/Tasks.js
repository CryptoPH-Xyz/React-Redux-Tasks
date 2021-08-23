import React, { useState } from 'react';

const Tasks = () => {

    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value);
    }
    //console.log("task:", task);

    return (
        <div className="add-task">
            <input type="text" onChange={(e) => handleChange(e)} className="task-input" />
            <button className="create-task">Create</button>
        </div>
    )
}

export default Tasks
