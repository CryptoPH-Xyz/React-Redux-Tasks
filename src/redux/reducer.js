import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const taskReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    //adding Tasks
    addTasks:(state, action) => {
        state.push(action.payload);
        return state;
    },
    //remove tasks
    removeTasks:(state, action) => {
        return state.filter((item) => item.id !== action.payload)
    },
    //update Tasks
    updateTasks:(state, action) => {
        return state.map( task => {
            if(task.id === action.payload.id){
                return {
                    ...task,
                    item: action.payload.item,
                }
            }
            return task;
        })
    }
  },
})

export const { addTasks, removeTasks, updateTasks } = taskReducer.actions
export const reducer =  taskReducer.reducer