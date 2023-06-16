import { useContext } from 'react';
import NavBar from './NavBar'
import { UserContext } from '../context/UserContext';

const Users = () => {
    const { users, deleteUser } = useContext(UserContext);
    const handleDelete = (id) => () => {
        deleteUser(id);
    }
    return(
        <div>
            <NavBar/>
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users;