
const MenuItem = ({item}) => {
    const { image, name, price, recipe } = item;

    return (
        <div className="flex">
            <img className="w-[118px] h-[108px] rounded-b-full rounded-tr-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">{price}</p>
        </div>
    );
};

export default MenuItem;