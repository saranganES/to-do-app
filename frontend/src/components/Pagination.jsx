import { useDispatch } from "react-redux";

const Pagination = ({ page, pages }) => {
    const dispatch = useDispatch();
    const handlePrev = () => {
        if (page > 1) dispatch({ type: "TASK_SET_PAGE", payload: page - 1 });
    };

    const handleNext = () => {
        if (page < pages) dispatch({ type: "TASK_SET_PAGE", payload: page + 1 });
    };

    return (
        <div className="flex justify-center items-center space-x-4 mt-6">
            <button
                onClick={handlePrev}
                disabled={page === 1}
                className={`px-4 py-2 rounded-lg text-white transition 
                ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 cursor-pointer"}`}>
                Previous
            </button>

            <span className="text-gray-800 font-semibold">
                Page {page} of {pages}
            </span>

            <button
                onClick={handleNext}
                disabled={page === pages}
                className={`px-4 py-2 rounded-lg text-white transition 
                ${page === pages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 cursor-pointer"}`}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
