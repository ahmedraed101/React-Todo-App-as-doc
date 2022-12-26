import { createSlice } from '@reduxjs/toolkit'
import {
    WriteTodoToFirebase,
    ReadTodosFromFirebase,
    RemoveTodoFromFirebase,
    toogleTodoInFirebase,
} from './../../firebase/database'

const TodoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setInit: (state, { payload: newState }) => {
            return newState
        },
        clearStore: (state, { payload }) => {
            return []
        },
        create: (state, { payload: todo }) => {
            state.push(todo)
        },
        remove: (state, { payload: id }) => {
            const todoIndex = state.findIndex((todo) => todo.id === id)
            state.splice(todoIndex, 1)
        },
        toggle: (state, { payload: id }) => {
            const todo = state.find((todo) => todo.id === id)
            todo.done = !todo.done
        },
    },
})

const { create, setInit, remove, toggle, clearStore } = TodoSlice.actions
export { clearStore }

export const createTodo = (todoText, uid) => {
    return async (dispatch, getState) => {
        const ref = await WriteTodoToFirebase({
            text: todoText,
            uid,
            done: false,
            createdAt: Date.now(),
        })
        dispatch(create({ text: todoText, id: ref.key }))
    }
}

export const removeTodo = (todoid) => {
    return async (dispatch, getState) => {
        await RemoveTodoFromFirebase(todoid)
        dispatch(remove(todoid))
    }
}

export const toggleTodo = (todoid, done) => {
    return async (dispatch, getState) => {
        await toogleTodoInFirebase(todoid, !done)
        dispatch(toggle(todoid))
    }
}

export const setInitState = (uid) => {
    return async (dispatch, getState) => {
        const todos = await ReadTodosFromFirebase(uid)
        dispatch(setInit(todos))
    }
}

export default TodoSlice
