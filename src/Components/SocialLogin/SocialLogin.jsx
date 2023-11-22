import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
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

                fetch('https://bistro-boss-server-eight-eta.vercel.app/users', {
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
            <div>
                <button onClick={handleGoogleLogin} className="text-center py-2 px-4 rounded-md w-full bg-blue-50 hover:bg-blue-200 border-none  items-center font-semibold flex"><FcGoogle className="mx-3 text-3xl"></FcGoogle> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;