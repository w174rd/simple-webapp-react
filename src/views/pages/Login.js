
import { useRef } from 'react';
import api from '../../services/API';
import { storageKey } from '../../util/Config';

const Login = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const password = passwordRef.current.value;
        const email = emailRef.current.value;

        api.login({
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response)
            localStorage.setItem(storageKey.USER_TOKEN, response?.data?.token)
        })
        .catch((error) => {
            console.error('Error:', error)
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
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
    )
}

export default Login