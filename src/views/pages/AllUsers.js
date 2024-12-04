import { useEffect, useState } from "react";
import api from "../../services/API";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [responseMessage, setResponseMessage] = useState()

    useEffect(() => {
        setResponseMessage(null)
        api.getUsers()
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.error('Error:', error)
            setResponseMessage(error.message)
        })
    }, [])

    return(
        <div className="container text-center mt-5">
            <div className="row align-items-center">
            <h1>Users</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                    users.length > 0 ? (
                    // eslint-disable-next-line
                    users?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                    ): (<tr>
                        <td colSpan="3">{responseMessage || "No user found"}</td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )

}

export default Users