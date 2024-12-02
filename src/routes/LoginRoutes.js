import Login from '../views/pages/Login'


const LoginRoutes = {
    path:'/',
    
    children: [
        {
            path:'/login',
            element: <Login />
        }
    ]
}

export default LoginRoutes