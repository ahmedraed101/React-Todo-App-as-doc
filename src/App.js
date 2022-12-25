import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignPage from './pages/SignPage'
import Profile from './pages/Profile'
import TodoPage from './pages/TodoPage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './components/NavBar'
import DashboardNav from './components/DashboardNav'
import './App.css'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<DashboardNav />}>
                    {/* the reason this renders the child elements is the Oulet renderd inside of it*/}
                    <Route index={true} element={<Dashboard />}></Route>
                    <Route path=':id' element={<TodoPage />}></Route>
                    <Route path='new' element={<TodoPage />}></Route>
                </Route>
                <Route path='/sign' element={<SignPage />}></Route>
                <Route path='/user' element={<Profile />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    )
}

export default App
