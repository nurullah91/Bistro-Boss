

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="food item" /></figure>
            <p className="bg-slate-900 text-white absolute top-5 px-4 py-2 rounded font-bold right-5">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;