import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Tastimonials from "../Tastimonials/Tastimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Tastimonials/>
        </div>
    );
};

export default Home;