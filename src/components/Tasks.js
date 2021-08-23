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
    const ref = useRef(true);

    const changeFocus = () => {
        ref.current.disabled = false;
        ref.current.focus();
    }

    const update = (id, value, e) => {
        if(e.which === 13){
            //here, 13 is key code for 'Enter' key
            props.updateTasks({id, item:value });
            ref.current.disabled = true;
        }
    }

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
                            <textarea 
                                ref={ref} 
                                disabled={ref} 
                                defaultValue={item.item} 
                                onKeyPress={(e) => update(item.id, ref.current.value, e)} 
                            />
                            <button onClick={() => changeFocus()}>Update</button>
                            <button onClick={() => props.completedTasks(item.id)}>Done</button>
                            <button onClick={() => props.removeTasks(item.id)}>Remove</button>
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
