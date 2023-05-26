import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SingIn from "../pages/SingIn/SingIn";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "menu",
                element: <Menu/>
            },
            {
                path: "order/:category",
                element: <Order/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/singup",
                element: <SingIn/>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
              }
        ]
    }
]);

export default router;