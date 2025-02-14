import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = (page = 1, limit = 5) => async (dispatch) => {
  dispatch({ type: "TASKS_REQUEST" });
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    dispatch({ type: "TASKS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "TASKS_FAILURE", payload: error.message });
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, taskData);
    dispatch({ type: "TASK_ADD", payload: response.data });
  } catch (error) {
    dispatch({ type: "TASK_ERROR", payload: error.message });
  }
};

export const editTask = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    dispatch({ type: "TASK_UPDATE", payload: response.data });
  } catch (error) {
    dispatch({ type: "TASK_ERROR", payload: error.message });
  }
};

export const deleteTask = (id, page) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(fetchTasks(page));
  } catch (error) {
    dispatch({ type: "TASK_ERROR", payload: error.message });
  }
};
