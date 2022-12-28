import { createBrowserRouter } from "react-router-dom";
import Main from '../../../Layout/Main'
import AddPost from "../../Home/Home/AddPost/AddPost";
import Home  from '../../Home/Home/Home'
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import Media from "../../Media/Media";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/Media',
                element:<Media></Media>
            },
            {
                path:'/Message',
                element:<Home></Home>
            },
            {
                path:'/About',
                element:<Home></Home>
            },
            {
                path:'/addPost',
                element:<AddPost></AddPost>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        ]

    }

])