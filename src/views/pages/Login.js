
import { useRef } from 'react';
import api from '../../services/API';
import { storageKey } from '../../util/Config';
import { ToastNotification } from '../../components/toast';
import CustomButton from '../../components/button';
import { showLoading } from '../../redux/actions/utility';
import { useDispatch } from 'react-redux';

const Login = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(
            showLoading({ button: true })
        )
        const password = passwordRef.current.value;
        const email = emailRef.current.value;

        api.login({
            email: email,
            password: password
        })
        .then((response) => {
            dispatch(showLoading({ button: false }))
            console.log(response)
            localStorage.setItem(storageKey.USER_TOKEN, response?.data?.token)
        })
        .catch((error) => {
            dispatch(showLoading({ button: false }))
            console.error('Error:', error)
            ToastNotification('error', error.message || "Login gagal");
        })
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