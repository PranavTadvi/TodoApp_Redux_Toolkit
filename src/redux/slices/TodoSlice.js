import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
                console.log(action.payload);
                state.push(action.payload);
        },
        removeUser:(state,action)=>{

        },
        deleteUsers:(state,action)=>{

        }
    }
})




export default todoSlice.reducer;
export const {addTodo} = todoSlice.actions; 