import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFoder = location.pathname.includes('login') || location.pathname.includes('singup');


    return (
        <div>
            {noHeaderFoder || <Navbar/> }
            <Outlet/>
            {noHeaderFoder || <Footer/>}
        </div>
    );
};

export default Main;