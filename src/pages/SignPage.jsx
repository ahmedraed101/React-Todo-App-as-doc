import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './../firebase/firebase.js'

const SignPage = () => {
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            if (result) {
                navigate('/dashboard')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h3>Sign Page</h3>
            <button onClick={googleLogin}>signin with Google 🟥🟨🟩🟦</button>
        </div>
    )
}

export default SignPage
