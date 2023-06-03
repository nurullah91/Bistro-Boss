import { Helmet } from "react-helmet-async";
import SecHeading from "../../../Components/SecHeading";
import { useForm } from "react-hook-form";

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro boss | Add item</title>
            </Helmet>
            <SecHeading heading='Add an Item' subHeading='What&apos;s new?'></SecHeading>


            <div>
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
                            <select {...register("category", { required: true, maxLength: 120 })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
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

                    <input type="submit" value='Add Item' className="bg-gradient-to-r from-[#976923] to-[#B58130] text-white font-semibold px-5 py-3 block mt-4" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;