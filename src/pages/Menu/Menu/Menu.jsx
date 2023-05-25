import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import SectionTilte from "../../../components/SectionTitle/SectionTilte";
import MenuCategory from "../MenuCategory/MenuCategory";

const menu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="OUR MENU"></Cover>
      <SectionTilte subHadding="Don't miss" headding="TODAY'S OFFERpmenuC" />
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory items={desserts} title="desserts" img={dessertImg}/>
      {/* pizza */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}/>
      {/* salad */}
      <MenuCategory items={salad} title="salad" img={saladImg}/>
      {/* soup */}
      <MenuCategory items={soup} title="soup" img={soupImg}/>
    </div>
  );
};

export default menu;
