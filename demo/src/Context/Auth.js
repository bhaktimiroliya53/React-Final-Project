import { createContext, useContext, useEffect, useState } from "react";

const Authcontext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null
    })

    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem('users'))
        if(loginUser){
            setAuth({
                ...auth,
                user : loginUser,
            })
        }
    },[])

    return (
        <Authcontext.Provider value={[auth , setAuth]}>
            {children}
        </Authcontext.Provider>
    )
}

// useAuth is custom hook

const useAuth = () => useContext(Authcontext);

export { useAuth, AuthProvider }