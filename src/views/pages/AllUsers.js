import { useEffect } from "react";
import { serviceUsers } from "../../services/actions/users";
import { useDispatch, useSelector } from "react-redux";


const Users = () => {
    const service = serviceUsers();
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(service.getUsers());
    },[]);

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
                    userState?.getUsers?.data?.length > 0 ? (
                    // eslint-disable-next-line
                    userState?.getUsers?.data?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                    ): (<tr>
                        <td colSpan="3">{userState?.getUsers?.message || "No user found"}</td>
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