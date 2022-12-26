import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from './../redux/slices/todoSlice.js'
const Todo = ({ todo: { text, id, done } }) => {
    const dispatch = useDispatch()
    const [removed, setRemoved] = useState(false)

    const handleRemoveTodo = () => {
        setRemoved(true)
        setTimeout(() => {
            dispatch(removeTodo(id))
        }, 400)
    }

    return (
        <div
            className={`animate-fadeInLeft ${
                removed ? 'animate-fadeOutLeft' : ''
            }`}
        >
            <div
                className={`border-l-4 ${
                    done ? 'border-l-green-600' : 'border-l-orange-600'
                } flex justify-between items-center mt-3 cursor-pointer duration-300  hover:scale-x-95 shadow-md rounded-tr-xl rounded-br-xl`}
            >
                <p
                    onClick={() => dispatch(toggleTodo(id, done))}
                    className={`${done ? 'line-through' : ''} flex-1 p-3 mb-1`}
                >
                    {text}
                </p>
                <button
                    onClick={() => {
                        handleRemoveTodo()
                    }}
                    className='px-10 rounded-lg text-xl text-black duration-100 mx-5 border-2 border-black hover:bg-black hover:text-red-500 '
                >
                    ☠
                </button>
            </div>
        </div>
    )
}

export default Todo
