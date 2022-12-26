import { createSlice } from '@reduxjs/toolkit'
import {
    WriteTodoToFirebase,
    ReadTodosFromFirebase,
} from './../../firebase/database'

const TodoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setInit: (state, { payload: newState }) => {
            return newState
        },
        create: (state, { payload: todo }) => {
            state.push(todo)
        },
    },
})

const { create, setInit } = TodoSlice.actions

export const createTodo = (todoText, uid) => {
    return async (dispatch, getState) => {
        const ref = await WriteTodoToFirebase({
            text: todoText,
            uid,
            createdAt: Date.now(),
        })
        dispatch(create({ text: todoText, id: ref.key }))
    }
}

export const setInitState = (uid) => {
    return async (dispatch, getState) => {
        const todos = await ReadTodosFromFirebase(uid)
        dispatch(setInit(todos))
    }
}

export default TodoSlice
