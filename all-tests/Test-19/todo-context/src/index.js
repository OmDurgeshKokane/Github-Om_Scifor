import React from "react";
import ReactDOM from "react-dom/client";  // Ensure correct import
import App from "./App";
import { TaskProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <TaskProvider>
        <App />
    </TaskProvider>
);
