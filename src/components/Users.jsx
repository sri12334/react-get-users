
import getUsers from '../apis/getUsers'
import './Users.css'
import { useEffect, useState } from 'react'
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        fetchUsers()
    }, []);
    return (
      <div>
           {users.length > 0 ? (
            <ul>
            {users.map((user) => (<User key={user.id} user={user} />))}
            </ul>
           ) : (<p>No Users exist</p>)}
      </div>
  )
}


export default Users