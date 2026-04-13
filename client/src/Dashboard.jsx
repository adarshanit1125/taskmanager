import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token");

    const getTasks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/tasks", {
                headers: { Authorization: token }
            });
            setTasks(res.data);
        } catch (err) {
            alert("Error fetching tasks");
        }
    };

    const addTask = async () => {
        if (!title) return alert("Enter task");

        try {
            setLoading(true);
            await axios.post(
                "http://localhost:5000/api/tasks",
                { title },
                { headers: { Authorization: token } }
            );
            setTitle("");
            getTasks();
        } catch {
            alert("Error adding task");
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
                headers: { Authorization: token }
            });
            getTasks();
        } catch {
            alert("Error deleting task");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Task Manager</h1>
                <button
                    onClick={logout}
                    className="bg-black text-white px-4 py-1 rounded"
                >
                    Logout
                </button>
            </div>

            {/* Add Task */}
            <div className="flex gap-2 mb-6">
                <input
                    className="border p-2 flex-1 rounded"
                    placeholder="Enter new task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white px-4 rounded"
                >
                    {loading ? "Adding..." : "Add"}
                </button>
            </div>

            {/* Task List */}
            <div className="space-y-2">
                {tasks.length === 0 ? (
                    <p className="text-gray-500">No tasks yet</p>
                ) : (
                    tasks.map((task) => (
                        <div
                            key={task._id}
                            className="flex justify-between items-center bg-white p-3 rounded shadow"
                        >
                            <span>{task.title}</span>
                            <button
                                onClick={() => deleteTask(task._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}