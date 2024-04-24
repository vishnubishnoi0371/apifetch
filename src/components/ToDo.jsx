import React, { useState } from "react";
const ToDo = () => {
  const [name, setName] = useState("");
  const [task, settask] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    if (task !== "") {
      settask([...task, name]);
      setName("");
    }
  };
  return (
    <div className="container d-flex flex-col j_center items-center mx-auto pt-6">
      <h1>Todo</h1>
      <form onSubmit={submit}>
        <input
          className="todo_input"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input className="main_btn" type="submit" />
      </form>
      <ul className=" d-flex flex-col gap-2">
        {task.map((task, index) => (
          <span key={index}>{task}</span>
        ))}
      </ul>
    </div>
  );
};
export default ToDo;
