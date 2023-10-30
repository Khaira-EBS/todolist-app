import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../action";

function AddTodo() {
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="pt-5">
      {showAlert && (
        <p className="w-full bg-red-500 text-white text-sm rounded-t-lg">Input cannot be empty</p>
      )}
      <form
        className="add-todo-form flex items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a new todo"
          className={`${showAlert ? "rounded-b-xl" : "rounded-l-xl"} bg-[#C3ACD0] w-5/6 p-3 focus:outline-none focus:ring-inherit focus:bg-gray-300 focus:text-black placeholder-white`}
        />
        <button
          type="submit"
          className={`${showAlert ? "rounded-b-xl" : "rounded-r-xl"} add-todo-button w-1/6 sm:w-2/6 bg-[#7743DB] hover:bg-[#9064e2] text-white font-semibold py-3 px-4 ml-0`}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
