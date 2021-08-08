import React from "react";

const Todo = ({ name, deleteItem, id, editItem }) => {
  return (
    <div className="p-4 mt-2 ps-0 ">
      <div className="row d-flex m-0 headerCol">
        <h5 className="col-12">{name}</h5>
        <div className="row m-0 p-0">
          <button
            className="btn btn-outline-primary col-2  ms-2 funtionBtn  rounded-3  m-0"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-primary col-2  ms-2 funtionBtn  rounded-3  m-0"
            onClick={() => editItem(id)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
