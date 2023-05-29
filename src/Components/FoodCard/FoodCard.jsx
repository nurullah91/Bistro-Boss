import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const FoodCard = ({ item }) => {

    const { image, name, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch(`http://localhost:5000/cart`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res=>res.json())
                .then(data=>{
                    if (data.insertedId){
                        Swal.fire('Order added to cart')
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please Login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }



    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="food item" /></figure>
            <p className="bg-slate-900 text-white absolute top-5 px-4 py-2 rounded font-bold right-5">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div onClick={handleAddToCart} className="card-actions justify-end">
                    <button className="btn bg-slate-100  btn-outline mt-8 border-b-4 border-0 border-orange-500 hover:text-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;