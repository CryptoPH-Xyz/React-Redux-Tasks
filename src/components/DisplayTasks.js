import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTasks, removeTasks, updateTasks, completedTasks } from '../redux/reducer';
import TaskItems from './TaskItems';

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

const DisplayTasks = (props) => {
    const [sort, setSort] = useState("active");
    return (
        <div className="display-tasks">
            <div className="display-buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("completed")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
            </div>
            <ul>
                { props.tasks.length > 0 && sort === "active" 
                ?   
                    props.tasks.map(item => {
                        return (
                            item.completed === false &&
                            <TaskItems 
                                ket={item.id}
                                item={item}
                                removeTasks={props.removeTasks}
                                updateTasks={props.updateTasks}
                                completedTasks={props.completedTasks}
                            />
                        )
                    })
                : null }

                { props.tasks.length > 0 && sort === "completed" 
                ?   
                    props.tasks.map(item => {
                        return (
                            item.completed === true &&
                            <TaskItems 
                                ket={item.id}
                                item={item}
                                removeTasks={props.removeTasks}
                                updateTasks={props.updateTasks}
                                completedTasks={props.completedTasks}
                            />
                        )
                    })
                : null }

                { props.tasks.length > 0 && sort === "all" 
                ?   
                    props.tasks.map(item => {
                        return (
                            <TaskItems 
                                ket={item.id}
                                item={item}
                                removeTasks={props.removeTasks}
                                updateTasks={props.updateTasks}
                                completedTasks={props.completedTasks}
                            />
                        )
                    })
                : null }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTasks);
