import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './slices/todoSlice'

const store = configureStore({
    reducer: {
        todos: TodoSlice.reducer,
    },
})

export default store
