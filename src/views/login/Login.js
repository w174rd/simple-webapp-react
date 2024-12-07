
import CustomButton from '../../components/button';
import { servicesAuth } from '../../services/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationSchema } from './validation';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const services = servicesAuth();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log(values)
            dispatch(services.login(values, navigate));
        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {({ isSubmitting }) => (
        <div className="container text-start mt-5">
            <div className="row align-items-left border p-4 shadow rounded">
                <h2 className="text-center mb-3 fw-bold">Login</h2>
            <Form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <Field id="password" type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                </div>
                <CustomButton className="btn btn-primary mb-3" text="Login" isDisable={isSubmitting} />
            </Form>
            </div>
        </div>
        )}
        </Formik>
    )
}

export default Login