import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,removeTodo } from "../redux/slices/TodoSlice";

const TodoDetails = () => {

    const dispatch = useDispatch();
    const data = useSelector((state)=>state.todos)
    const [todoIn,setTodoIn]=useState("");
    // console.log(data);
    // data.map((data,id)=>console.log(data))
    console.log(todoIn); 

const addNewTodo=(name)=>{
dispatch(addTodo(name))
    setTodoIn("")
}
const deleteTodo = (id)=>{
dispatch(removeTodo(id))
}

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="d-flex justify-content-around">
            <th scope="col">No</th>
            <th scope="col">Tasks</th>
            <th scope="col"><input type="text" value={todoIn} onChange={(e)=>setTodoIn(e.target.value)}/></th>
            <th>
              <button className="btn btn-primary btn-sm" type="submit" onClick={()=>addNewTodo(todoIn)}>
                Add New User
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
         {
            data.map((todo,id)=>{
               return (
                <>
                 <tr className="d-flex justify-content-around">
                <th scope="row">{id+1}</th>
                <td>{todo}</td>
               <td> <button className="btn btn-danger btn-sm" type="submit" onClick={()=>deleteTodo(id)}>
                    Delete
                  </button></td>
                {/* <div className="d-flex justify-content-around ">
                  <button className="btn btn-success btn-sm me-2" type="submit">
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" type="submit">
                    Delete
                  </button>
                </div> */}
              </tr>
                </>
               )
            })
         }
        </tbody>
        <hr className="border border-secondary border-2 opacity-50"></hr>
      <div className="d-flex flex-row-reverse justify-content-around">
      <button className="btn btn-danger btn-sm" type="submit">
                Delete All
              </button>
      </div>
      </table>
      
    </div>
  );
};

export default TodoDetails;
