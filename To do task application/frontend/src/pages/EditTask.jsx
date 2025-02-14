import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../redux/actions/task";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tasks = useSelector((state) => state.tasks.tasks);
    const existingTask = tasks.find((task) => task._id === id);

    const [title, setTitle] = useState(existingTask ? existingTask.title : "");

    useEffect(() => {
        if (existingTask) setTitle(existingTask.title);
    }, [existingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch(editTask(id, { title }));
        navigate("/");
    };

    if (!existingTask) return <p className="text-center text-red-500 text-lg mt-6">Task not found!</p>;

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Edit Task</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Update task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default EditTask;
