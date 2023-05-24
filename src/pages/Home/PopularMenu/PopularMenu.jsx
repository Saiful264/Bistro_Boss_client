import { useEffect, useState } from "react";
import SectionTilte from "../../../components/SectionTitle/SectionTilte";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("../../../../public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItem = data.filter((item) => item.category === "popular");
        setMenu(populerItem);
      });
  }, []);

  return (
    <section className="mb-3">
      <SectionTilte subHadding={"Check it out"} headding={"FROM OUR MENU"} />
      <div className="grid md:grid-cols-2 gap-10">
        {
        menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))
        }
      </div>
    </section>
  );
};

export default PopularMenu;
