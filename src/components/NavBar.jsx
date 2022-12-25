import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './../firebase/firebase.js'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const styleNavLink = ({ isActive }) => (isActive ? 'red' : 'blue')
    const [user] = useAuthState(auth)

    return (
        <div className='flex justify-between mx-10 my-5 shadow-md p-5'>
            <ul className='flex gap-5'>
                <li>
                    <NavLink to='/' className={styleNavLink}>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' end className={styleNavLink}>
                        {/* end makes the active only on the dashboard not the child routes*/}
                        dashboard
                    </NavLink>
                </li>
            </ul>
            {user ? (
                <div className='shadow-xl p-5 rounded-xl bg-teal-100'>
                    <div className='flex justify-around items-center'>
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className='w-10 h-10 rounded-full'
                        />
                        <p className='text-md ml-1 text-gray-700'>
                            {user.displayName}
                        </p>
                    </div>
                    <button
                        onClick={() => auth.signOut()}
                        className='text-red-600  px-3 py-1 mt-3 text-sm text-center hover:bg-red-600 hover:text-white duration-200'
                    >
                        sign out
                    </button>
                </div>
            ) : (
                <div>
                    <NavLink to='/sign' className={styleNavLink}>
                        signin
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default NavBar
