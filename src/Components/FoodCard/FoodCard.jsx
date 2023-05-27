

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="food item" /></figure>
            <p className="bg-slate-900 text-white absolute top-5 px-4 py-2 rounded font-bold right-5">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-100  btn-outline mt-8 border-b-4 border-0 border-orange-500 hover:text-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;