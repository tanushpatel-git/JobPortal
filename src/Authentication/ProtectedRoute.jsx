import React  from 'react'
import LockPage from '../Pages/LockPage.jsx'


const ProtectedRoute = ({children}) => {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    return loginData ? children : <LockPage/>
}
export default ProtectedRoute
