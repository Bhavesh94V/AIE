import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "./features/contactSlice"
import enrollmentReducer from "./features/enrollmentSlice"

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    enrollment: enrollmentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
