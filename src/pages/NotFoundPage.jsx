import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const [timeleft, setTimeLeft] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((t) => t - 1)
        }, 1000)

        setTimeout(() => {
            navigate('/')
        }, 5000)

        return () => clearInterval(intervalId)
    }, [timeleft, navigate])

    return (
        <div>
            NotFoundPage
            <h3>you will be navigated to home in {timeleft}</h3>
        </div>
    )
}

export default NotFoundPage
