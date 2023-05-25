
const MenuCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />

            <div>
                <h3 className="uppercase text-xl font-bold">{name}---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuCard;