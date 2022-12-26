import { ref, get, push, query, orderByChild, equalTo } from 'firebase/database'
import { database } from './firebase'

export const WriteTodoToFirebase = async (value) => {
    return await push(ref(database, 'todos'), value)
}

export const ReadTodosFromFirebase = async (uid) => {
    try {
        const q = await query(
            ref(database, 'todos'),
            orderByChild('uid'),
            equalTo(uid)
        )
        const snapshot = await get(q)
        if (snapshot.exists()) {
            const todos = snapshot.val()
            return Object.keys(todos).map((key) => ({
                id: key,
                text: todos[key].text,
                createdAt: todos[key].createdAt,
            }))
        }
    } catch (err) {
        console.error(err)
        return []
    }
}
