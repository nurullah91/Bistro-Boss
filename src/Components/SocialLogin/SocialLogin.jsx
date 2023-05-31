import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })

                    })


            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="divider">Sign in with</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-circle"><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;