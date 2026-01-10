import React, {createContext, useContext, useState} from 'react'

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(false);
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    if(loginData){
        setUserData(true);
    }
    return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}