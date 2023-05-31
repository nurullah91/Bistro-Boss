import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const { signIn } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }

        else {
            setDisabled(true);
        }

    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire(
                    'Success',
                    'Login successful!',
                    'success'
                )
                const user = result.user;
                console.log(user);
                navigate(from)
            })
            .catch(err => {
                Swal.fire(
                    'Oops!',
                    'something went wrong',
                    'error'
                )
                console.log(err);
            })
    }
    return (
        <>
            <Helmet>
                <title>Bistro boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card  lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPass ? "text" : "password"} name="password" required placeholder="password" className="input input-bordered" />
                                    <span className='absolute bottom-12 right-3' onClick={() => setShowPass(!showPass)}>{!showPass ? <FaEye ></  FaEye> : <FaEyeSlash></FaEyeSlash>}</span>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleCaptcha} type="text" name="captcha" required placeholder="Type the captcha above" className="input input-bordered" />

                                </div>


                                <div className="form-control mt-6">
                                    <input disabled={disabled} type="submit" className="btn btn-full" value="Login" />
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p><small>New this Website please <Link className="text-blue-500 font-bold hover:underline mx-1" to='/signup'>Sign Up</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;