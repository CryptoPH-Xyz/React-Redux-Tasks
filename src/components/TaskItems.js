import React, { useRef } from 'react'

const TaskItems = (props) => {
    const {item, updateTasks, removeTasks, completedTasks} = props;
    const ref = useRef(true);

    const changeFocus = () => {
        ref.current.disabled = false;
        ref.current.focus();
    }

    const update = (id, value, e) => {
        if(e.which === 13){
            //here, 13 is key code for 'Enter' key
            updateTasks({id, item:value });
            ref.current.disabled = true;
        }
    }
    return (
        <li key={item.id} className="card">
            <textarea 
                ref={ref} 
                disabled={ref} 
                defaultValue={item.item} 
                onKeyPress={(e) => update(item.id, ref.current.value, e)} 
            />
            <div className="buttons">
                <button onClick={() => changeFocus()}>Update</button>
                <button onClick={() => completedTasks(item.id)}>Complete</button>
                <button onClick={() => removeTasks(item.id)}>Remove</button>
            </div>
            {item.completed && <span className="completed">done</span>}
        </li>
    )
}

export default TaskItems
