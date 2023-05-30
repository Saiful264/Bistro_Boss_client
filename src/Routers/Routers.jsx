import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import SingIn from "../pages/SingIn/SingIn";
import AllUser from "../pages/Dashboard/AllUser/AllUser";

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
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MyCart/>
            },
            {
                path: "alluser",
                element: <AllUser/>
            }
        ]
    }
]);

export default router;