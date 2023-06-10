import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>Welcome {user?.displayName}</h3>
            
        </div>
    );
};

export default UserHome;