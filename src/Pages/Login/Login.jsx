import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    
    const {signIn} = useContext(AuthContext);

    const handleCaptcha = ()=>{
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
           setDisabled(false);
        }
   
        else {
           setDisabled(true);
        }

    }
    useEffect( ()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required  placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"  required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" ref={captchaRef}  required placeholder="Type the captcha above" className="input input-bordered" />
                                <button onClick={handleCaptcha} className='btn btn-outline btn-xs mt-3'>Validate</button>
                               
                            </div>


                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" className="btn btn-full" value="Login" />
                            </div>
                        </form>
                        <p><small>New this Website please <Link to='/signup'>Sign Up</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;