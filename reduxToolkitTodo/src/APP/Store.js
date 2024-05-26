import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/Todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer
})