
import { useFormik } from "formik"
import { validationSchemaCreate, validationSchemaUpdate } from "./validation"
import CustomButton from "../../../components/button"
import { useDispatch, useSelector } from "react-redux"
import { serviceUsers } from "../../../services/actions/users"
import { useNavigate } from "react-router-dom"



const UserForm = () => {

    const dispatch = useDispatch();
    const service = serviceUsers();
    const navigate = useNavigate();
    const user = useSelector((state) => state?.user?.getUser);

    const isUpdate = Boolean(user?.data?.id);

    const handleSubmit = async () => {
        try {
            console.log(`request: ${JSON.stringify(formik.values)}`);
            if (isUpdate) {
                dispatch(service.updateUser(formik.values, navigate));
            } else {
                dispatch(service.createUser(formik.values, navigate));
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            id: user?.data?.id, 
            name: user?.data?.name, 
            email: user?.data?.email, 
            password: null
        },
        validationSchema: isUpdate ? validationSchemaUpdate : validationSchemaCreate,
        onSubmit: handleSubmit
    });

    const handleForm = (event) => {
        const {target} = event; 
        formik.setFieldValue(target.name, target.value);
    }

    return (
        <form onSubmit={formik.handleSubmit} className="container text-start mt-5">
            <div className="border p-4 shadow rounded">
                <h2 className="mb-3 text-center fw-bold">{isUpdate ? "Update" : "Create"}</h2>    
                <input type="hidden"  id="id" name="id" />
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formik.values.name} 
                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`} 
                        onChange={handleForm} 
                     />
                    {formik.touched.name && formik.errors.name ? (
                        <label className="invalid-feedback">{formik.errors.name}</label>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formik.values.email} 
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} 
                        onChange={handleForm} 
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    ) : null}
                </div>
                {
                    !isUpdate && (
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} 
                            onChange={handleForm} 
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    )
                }
                <CustomButton
                    text="Submit"
                    className="btn btn-primary mb-3"
                /> 
            </div> 
        </form>
    )

}

export default UserForm