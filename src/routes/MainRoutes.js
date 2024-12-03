import Users from "../views/pages/AllUsers"
import Login from "../views/pages/Login"



const MainRoutes =  {
    path:'/',
    
    children: [
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/users',
            element: <Users />
        }
    ]
}

export default MainRoutes