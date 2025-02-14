import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../../redux/actions/task";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error, page, pages } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks(page));
    }, [dispatch, page]);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">To-Do List</h2>

            <div className="flex justify-end mb-4">
                <Link to="/add-task">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        + Add Task
                    </button>
                </Link>
            </div>

            {loading && <p className="text-gray-700 text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                        <span className="text-lg font-medium text-gray-800">{task.title}</span>
                        <div className="flex space-x-2">
                            <Link to={`/edit-task/${task._id}`}>
                                <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                                    Edit
                                </button>
                            </Link>
                            <button
                                onClick={() => dispatch(deleteTask(task._id, page))}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {
                tasks.length ?
                    <div className="mt-6">
                        <Pagination page={page} pages={pages} />
                    </div>
                    :
                    <div className="font-medium">No Task Found</div>
            }

        </div>
    );
};

export default TaskList;
