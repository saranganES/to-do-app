import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/task";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch(addTask({ title }));
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add New Task</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
