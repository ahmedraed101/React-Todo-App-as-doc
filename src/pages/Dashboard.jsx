import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'

import { setInitState, createTodo } from './../redux/slices/todoSlice'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user] = useAuthState(auth)
    const [currentTodo, setCurrentTodo] = useState('')
    const todos = useSelector((state) => state.todos)

    const handleSubmitTodo = (e) => {
        e.preventDefault()
        if (currentTodo.trim() === '') return
        dispatch(createTodo(currentTodo, user.uid))
        setCurrentTodo('')
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) navigate('/sign')
            dispatch(setInitState(user.uid))
        })
    }, [navigate, dispatch])

    return (
        <div className='m-10 mx-5 shadow-xl p-5'>
            <h2 className='text-center m-5 text-xl border-2 border-transparent pb-2 border-b-teal-600'>
                Dashboard
            </h2>
            <form
                className='flex justify-center items-center '
                onSubmit={handleSubmitTodo}
            >
                <input
                    type='text'
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                    className='w-1/2 border-2 border-gray-600 p-1 rounded-md text-center outline-none focus:border-teal-600 md:w-100 lg:w-200'
                />
                <button
                    type='submit'
                    className='px-5 py-1.5 ml-2 text-center box-border bg-teal-600 text-white rounded-md'
                >
                    {' '}
                    add Todo
                </button>
            </form>
            <div>
                {todos.map((todo) => (
                    <h2 key={todo.id}>{todo.text}</h2>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
