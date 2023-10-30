import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import VisibilityFilter from "./components/VisibilityFilter/VisibilityFilter";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">What's the plan for today?</h1>
      <AddTodo />
      <VisibilityFilter />
      <TodoList />
    </div>
  );
}

export default App;
