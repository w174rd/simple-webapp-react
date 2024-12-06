
import { useRef } from 'react';
import CustomButton from '../../components/button';
import { servicesAuth } from '../../services/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    // const authData = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const services = servicesAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const password = passwordRef.current.value;
        const email = emailRef.current.value;

        dispatch(services.login({email: email, password: password}, navigate));

        // ToastNotification('success', JSON.stringify(authData?.login?.data || ""))
    }

    return (
        <div className="container text-start mt-5">
            <div className="row align-items-left">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <CustomButton className="btn btn-primary" text="Login" />
            </form>
            </div>
        </div>
    )
}

export default Login