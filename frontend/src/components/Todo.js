import React from "react";

export default function Todo(props) {
  const { _id, title, isCompleted } = props.task;
  return (
    <div className="m-1">

<label className="list-group-item ">
<input className="form-check-input-flex m-2" type="checkbox" defaultChecked={isCompleted} 
      onClick={()=>{
        props.ToogleTodo(_id, !isCompleted)
      }}/>
    <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {" "}
        {title}
      </span>
      <button className="m-3 btn btn-outline-danger"
        onClick={() => {
          props.deleteTodo(_id);
        }}
        
      >
        <i className=" bi bi-trash-fill "></i>
      </button>
  </label>
      
      
      
    </div>
  );
}
