import { Outlet, Link } from 'react-router-dom'

const DashboardNav = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to='new'>create new todo</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/12'> todo one</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/56'> todo two</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default DashboardNav
