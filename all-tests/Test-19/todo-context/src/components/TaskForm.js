import { useState } from "react";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
    const [task, setTask] = useState("");
    const { addTask } = useTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
