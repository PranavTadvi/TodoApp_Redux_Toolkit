import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
                console.log(action.payload);
                state.push(action.payload);
        },
        removeTodo:(state,action)=>{
              state.splice(action.payload,1);
        },
        deleteTodos:(state,action)=>{

        }
    }
})




export default todoSlice.reducer;
export const {addTodo,removeTodo} = todoSlice.actions; 