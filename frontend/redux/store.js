import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/task";
import { thunk as thunkMiddleware } from "redux-thunk";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});
