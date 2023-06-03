import { Helmet } from "react-helmet-async";
import SecHeading from "../../../Components/SecHeading";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro boss | Manage Items</title>
            </Helmet>


            <SecHeading subHeading='Hurry Up' heading='Manage All Items'></SecHeading>
            <h3 className="text-3xl my-4">Total Items : {menu.length}</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td> {item.price}</td>
                                    <td>Edit</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="bg-red-500 btn text-2xl border-none"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;