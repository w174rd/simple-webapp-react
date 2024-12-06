
import { ErrorMessage, Field, Form, Formik } from "formik"
import { validationSchema } from "./validation"
// import { useDispatch } from "react-redux"
import CustomButton from "../../../components/button"
import { useDispatch } from "react-redux"
import { serviceUsers } from "../../../services/actions/users"
import { useNavigate } from "react-router-dom"



const UserForm = () => {

    const dispatch = useDispatch();
    const service = serviceUsers();
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log(values)
            dispatch(service.createUser(values, navigate));
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="container text-start mt-5">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <Field type="text" id="name" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field type="email" id="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field type="password" id="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                    </div>
                    <CustomButton
                            text="Submit"
                            className="btn btn-primary"
                            isDisable={isSubmitting}
                    />     
                </Form>
            )}
        </Formik>
    )

}

export default UserForm