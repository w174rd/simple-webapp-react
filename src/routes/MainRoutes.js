import { Navigate } from "react-router-dom"
import Users from "../views/pages/AllUsers"
import Login from "../views/pages/Login"
import UserForm from "../views/pages/UserForm"



const MainRoutes =  [
    {
        path:'/',
        element: <Navigate to='/login' replace />,
        // lazy: async () => ({
        //     Component: (await import("../views/pages/Login")).default
        // }),
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/users',
    
        children: [
            {
                path:'',
                element: <Users />
            },
            {
                path:'form',
                element: <UserForm />
            }
        ]
    }
]

export default MainRoutes