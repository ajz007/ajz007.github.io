import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../redux/reducers/rootReducer'
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(thunk)
})