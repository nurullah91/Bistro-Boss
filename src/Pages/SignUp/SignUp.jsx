import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);


    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>

            </div>
            <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="Name" required  placeholder="Name" className="input input-bordered" />
                        </div>
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

                        

                        <div className="form-control mt-6">
                            <input  type="submit" className="btn btn-full" value="Sign Up" />
                        </div>
                    </form>
                    <p><small>Already have an account? please <Link to='/login'>Login</Link></small></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;