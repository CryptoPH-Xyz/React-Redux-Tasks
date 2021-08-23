import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addTasks, removeTasks, updateTasks } from '../redux/reducer';

const mapStateToProps = (state) => {
    return  {
        tasks: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTasks: (obj) => dispatch(addTasks(obj)),
        removeTasks: (id) => dispatch(removeTasks(id)),
        updateTasks: (id) => dispatch(updateTasks(id)),
    }
}

const Tasks = (props) => {

    const [task, setTask] = useState("");
    const ref = useRef(true);

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
            <ul>
                {props.tasks.map(item => {
                    return (
                        <li key={item.id}>
                            <textarea ref={ref} disabled={ref} defaultValue={item.item} />
                            <button onClick={() => props.updateTasks(item.id)}>Update</button>{" "}
                            <button onClick={() => props.removeTasks(item.id)}>Remove</button>{" "}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

/* Questions 
Why is ID random? - line 29
*/
