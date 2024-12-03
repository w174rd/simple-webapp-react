import { useRef } from "react"
import api from "../../services/API"



const UserForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        api.register({
            name: name,
            email: email,
            password: password,
        })
        .then((response => {

        }))
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className="container text-start mt-5">
        <div className="row align-items-left">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="name" ref={nameRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" ref={passwordRef} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
    )

}

export default UserForm