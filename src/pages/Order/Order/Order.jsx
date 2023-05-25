import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTad from "../OrderTad/OrderTad";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categorys = ["salad", "pizza", "ordersoup", "desserts", "drinks"];
  const { category } = useParams();
  const initalIndex = categorys.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initalIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderCover} title={"Order foood"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Suop</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTad items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTad items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTad items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTad items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTad items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
