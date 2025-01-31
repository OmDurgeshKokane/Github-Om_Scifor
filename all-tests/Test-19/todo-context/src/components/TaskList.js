import { useTask } from "../context/TaskContext";

const TaskList = () => {
    const { tasks, removeTask } = useTask();

    return (
        <ul className="task-list">
            {tasks.length === 0 ? <p>No tasks added yet!</p> : null}
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => removeTask(task.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
