import { Navigate, Outlet } from "react-router-dom"
import Login from "../views/login/Login"
import UserForm from "../views/user/form/UserForm"
import Users from "../views/user/AllUsers"
import ProtectedRoute from "../util/ProtectedRoute"
// import ProtectedRoute from "../util/ProtectedRoute"



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
             <Outlet />
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