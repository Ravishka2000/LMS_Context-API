import { createContext, useState } from "react"
import User from '../data/User'

export const UserContext = createContext(null)

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState(User);

    const addUser = (aUser) => {
        setUsers([...users, aUser]);
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    }

    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    const value = {
        users,
        addUser,
        deleteUser,
        updateUser
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;