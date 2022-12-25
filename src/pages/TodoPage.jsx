import { useParams } from 'react-router-dom'

const TodoPage = () => {
    const { id } = useParams()
    return <div>TodoPage : todo numner > >> {id}</div>
}

export default TodoPage
