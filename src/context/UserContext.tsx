import { useContext, createContext, useEffect, useState } from 'react'
import { IUserContextProps, IUserContext, Iuser } from '.'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserContextProps) => {

    const { loginWithRedirect, logout, user } = useAuth0()

    const [myUser, setMyUser] = useState<Iuser | null>(null)



    useEffect(() => {
        setMyUser(user || null)
    }, [user])

    return (
        <UserContext.Provider value={{
            loginWithRedirect,
            logout,
            myUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
