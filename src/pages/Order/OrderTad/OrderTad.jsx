import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTad = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
           items.map(item => <FoodCard
           key={item._id}
           item={item}
           />)
         }
        </div>
    );
};

export default OrderTad;