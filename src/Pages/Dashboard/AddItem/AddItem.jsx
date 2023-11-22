import { Helmet } from "react-helmet-async";
import SecHeading from "../../../Components/SecHeading";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageUploadToken = import.meta.env.VITE_image_upload_token;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    data.image = imageResponse.data.display_url;
                    data.price = parseFloat(data.price);

                    axiosSecure.post('/menu', data)
                        .then(result => {
                            if (result.data.insertedId) {
                               reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            }
                        })

                }
            })


    };

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro boss | Add item</title>
            </Helmet>
            <SecHeading heading='Add an Item' subHeading='What&apos;s new?'></SecHeading>


            <div className="lg:w-11/12 mx-auto bg-slate-100 shadow-md p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="flex items-center justify-between my-4">
                        <div className="form-control w-full mr-3">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='Pick One' {...register("category", { required: true, maxLength: 120 })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>dessert</option>
                                <option>drinks</option>
                                <option>soup</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true, maxLength: 10 })} placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true, maxLength: 220 })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                    <input type="submit" value='Add Item' className="bg-gradient-to-r from-[#976923] to-[#B58130] text-white font-semibold px-5 py-3 rounded block mt-4" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;