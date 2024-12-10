import { useEffect } from "react";
import { serviceUsers } from "../../services/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserState } from "../../redux/actions/utility";
import ModalConfirm from "../../components/ModalConfirm";
import ButtonWithConfirm from "../../components/buttonWithConfirm/ButtonWithConfirm";



const Users = () => {
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const service = serviceUsers();

      
    useEffect(() => {
        dispatch(serviceUsers().getUsers());
    }, [dispatch]);

    return(
        <div className="container text-center mt-5">
            <ModalConfirm onClick="" />
            <h2 className="fw-bold mb-3">Users</h2>
            <div className="row align-items-center border p-4 rounded">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary" onClick={
                    () => {
                        dispatch(clearUserState())
                        navigate("form", { replace: true})
                    }
                }>Create</button>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
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
                            <td className="col align-items-center">
                                <button type="button" class="btn btn-warning" onClick={
                                    () => {
                                        dispatch(service.getUser(user.id, navigate))
                                    }
                                }>Edit</button> 
                                <ButtonWithConfirm
                                    btnTitle="Delete" 
                                    handleConfirm={() =>
                                        dispatch(service.deleteUser(user.id))
                                    }
                                    titleModal="Confirm"
                                    messageModal="Sure to delete this data?"
                                    btnConfirmModal="Ya" />
                            </td>
                        </tr>
                    ))
                    ): (<tr>
                        <td colSpan="4">{userState?.getUsers?.message || "No user found"}</td>
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