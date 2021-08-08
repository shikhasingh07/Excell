import React, { useState, useEffect } from "react";
import { getLocalItems, nowDay } from "./LocalStorage";
import Todo from "./Todo/Todo";

const Todos = () => {
  const [addTodo, setInputData] = useState("");
  const [Items, setInputVal] = useState(getLocalItems());
  const [toggleEdit, setEdit] = useState(true);
  const [isEditItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("AllTodo", JSON.stringify(Items));
  }, [Items]);

  const getInput = () => {
    if (!addTodo) {
    } else if (addTodo && !toggleEdit) {
      setInputVal(
        Items.map((it) => {
          if (it.id === isEditItem) {
            return { ...it, name: addTodo };
          }
          return it;
        })
      );
      setEdit(true);
      setInputData("");
      setEditItem(null);
    } else {
      const Input = { id: Math.random().toString(), name: addTodo };
      setInputVal([...Items, Input]);
      setInputData("");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      getInput();
    }
  };

  const deleteItem = (id) => {
    const Itemfil = Items.filter((it) => {
      return id !== it.id;
    });
    setInputVal(Itemfil);
  };

  const editItem = (id) => {
    let inputEdit = Items.find((it) => id === it.id);
    setEdit(false);
    setInputData(inputEdit.name);
    setEditItem(id);
  };

  return (
    <div className="conatinerTodo mx-auto shadow p-4 mt-5">
      <h1 className="headerDate">MY TODO LIST</h1>
      <h4 className="headerDate mt-3">{nowDay}</h4>
      <div className="d-flex mt-5">
        <input
          type="text"
          name="message"
          onChange={(e) => setInputData(e.target.value)}
          value={addTodo}
          onKeyDown={handleKeypress}
          className="form-control rounded-0"
          placeholder="What's in your mind Today"
        />
        {toggleEdit ? (
          <button
            onClick={getInput}
            type="submit"
            className="btn d-flex align-item-center editBtn  rounded-0"
          >
            <span className="btnHeader">+</span>
          </button>
        ) : (
          <button
            onClick={getInput}
            type="submit"
            className="btn editBtn rounded-0"
          >
            Edit
          </button>
        )}
      </div>
      {Items.map((it) => (
        <Todo
          key={it.id}
          name={it.name}
          deleteItem={deleteItem}
          editItem={editItem}
          id={it.id}
        />
      ))}
    </div>
  );
};

export default Todos;
