import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(() => {

                updateUser(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-eight-eta.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(result => {
                                if (result.insertedId) {
                                    Swal.fire(
                                        'Congratulation!',
                                        'You have successfully created an account',
                                        'success'
                                    )

                                    reset();
                                    navigate('/')
                                }
                            })
                        console.log("User Updated successfully");
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch(err => {
                Swal.fire(
                    'oops',
                    'something went wrong',
                    'error'
                );
                console.log(err);
            })
    };




    return (

        <>
            <Helmet>
                <title>Bistro boss | Sign Up</title>
            </Helmet>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>

                    </div>
                    <div className="car w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-rose-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo url" className="input input-bordered" />
                                    {errors.name && <span className="text-rose-600">Photo URL  is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-rose-600">Email is required</span>}
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={showPass ? "text" : "password"}   {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./

                                        })} name="password" placeholder="password" className="input w-full input-bordered" />
                                        <span className='absolute bottom-4 right-3' onClick={() => setShowPass(!showPass)}>{!showPass ? <FaEye ></  FaEye> : <FaEyeSlash></FaEyeSlash>}</span>

                                    </div>
                                    {errors.password?.type === 'required' && <span className="text-rose-600">Password is required</span>}

                                    {errors.password?.type === 'minLength' && <span className="text-rose-600">Password must be more than 6 character</span>}

                                    {errors.password?.type === 'maxLength' && <span className="text-rose-600">Password must be less than 20 character</span>}

                                    {errors.password?.type === 'pattern' && <span className="text-rose-600">Password must have one uppercase one lower case one number and one special character</span>}


                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">sign up</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p><small>Already have an account? please <Link className="text-blue-500 font-bold hover:underline mx-1" to='/login'>Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;