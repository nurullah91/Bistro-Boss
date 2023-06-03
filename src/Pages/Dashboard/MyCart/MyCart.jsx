import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result =>{ if(result.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Food has been deleted.',
                            'success'
                        )
                        refetch();
                    }})
            }
        })
       
    }


    return (
        <div className="w-full h-[-webkit-fill-available]">
            <Helmet>
                <title>Bistro boss | My Cart</title>
            </Helmet>
            <div className="uppercase flex justify-between items-center h-16">
                <h3 className="text-3xl">Total Order: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: {total}</h3>
                <button className="btn bg-[#D1A054] border-none btn-sm">Pay</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th> # </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-end">$ {item.price}</td>
                                    <th>
                                       
                                    </th>
                                </tr>
                            )

                        }



                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyCart;