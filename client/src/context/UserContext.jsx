import { createContext,useState,useCallback } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState([]) 
    const updateUser = useCallback((id)=>{
        setUser(id)
    })
    return <UserContext.Provider
    value={{
    user,
    updateUser
    }}
    >
        {children}
    </UserContext.Provider>
}