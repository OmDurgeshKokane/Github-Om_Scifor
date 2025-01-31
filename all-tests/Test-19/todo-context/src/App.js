import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css"; // Ensure styles are imported

const App = () => {
    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
