const initialState = {
    tasks: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    pages: 1,
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TASKS_REQUEST":
            return { ...state, loading: true };
        case "TASKS_SUCCESS":
            return {
                ...state,
                loading: false,
                tasks: action.payload.tasks,
                total: action.payload.total,
                page: action.payload.page,
                pages: action.payload.pages,
            };
        case "TASKS_FAILURE":
            return { ...state, loading: false, error: action.payload };
        case "TASK_ADD":
            return { ...state, tasks: [...state.tasks, action.payload] };
        case "TASK_UPDATE":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        case "TASK_DELETE":
            return { ...state, tasks: state.tasks.filter((task) => task._id !== action.payload) };
        case "TASK_ERROR":
            return { ...state, error: action.payload };
        case "TASK_SET_PAGE":
            return { ...state, page: action.payload, };
        default:
            return state;
    }
};
