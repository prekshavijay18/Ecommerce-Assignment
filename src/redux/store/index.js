import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../rootReducer";

export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
