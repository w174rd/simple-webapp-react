import { Navigate } from "react-router-dom"
import Users from "../views/user/AllUsers"
import Login from "../views/login/Login"
import UserForm from "../views/user/UserForm"
import ProtectedRoute from "../util/ProtectedRoute"



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
        element:(
            <ProtectedRoute>
             <Users />
            </ProtectedRoute>
        ),
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