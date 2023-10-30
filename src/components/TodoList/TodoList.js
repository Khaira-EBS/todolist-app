import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../../action";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return true;
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, text) => {
    const newText = prompt("Edit your todo", text);
    if (newText) {
      dispatch(editTodo(id, newText));
    }
  };

  return (
    <ul className="todo-list pt-2 flex flex-col space-y-4 items-center">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className="flex w-3/4 items-center py-1 px-3 border-2 border-gray-400 rounded-lg">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
            className="h-7 w-7 text-blue-500"
          />
          <span
            className={`text-lg w-2/3 ${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.text}
          </span>
          <div className="ml-auto space-x-2">
            <button
              onClick={() => handleEdit(todo.id, todo.text)}
              className="edit-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="delete-button bg-red-500 hover.bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
