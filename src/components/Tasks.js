import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addTasks, removeTasks, updateTasks, completedTasks } from '../redux/reducer';

const mapStateToProps = (state) => {
    return  {
        tasks: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTasks: (obj) => dispatch(addTasks(obj)),
        removeTasks: (id) => dispatch(removeTasks(id)),
        updateTasks: (obj) => dispatch(updateTasks(obj)),
        completedTasks: (id) => dispatch(completedTasks(id)),
    }
}

const Tasks = (props) => {

    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }
    console.log("Props from store", props);

    return (
        <div className="add-task">
            <input type="text" onChange={(e) => handleChange(e)} className="task-input" />
            <button className="create-task" onClick={() => props.addTasks({
                id: Math.floor(Math.random()*1000),
                item: task,
                completed: false,
            })}>Create
            </button>
            <br/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

/* Questions 
Why is ID random? - line 29
*/
