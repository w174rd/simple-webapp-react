import Users from "../views/pages/AllUsers"
import Login from "../views/pages/Login"
import UserForm from "../views/pages/UserForm"



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
        },
        {
            path:'/users_form',
            element: <UserForm />
        }
    ]
}

export default MainRoutes