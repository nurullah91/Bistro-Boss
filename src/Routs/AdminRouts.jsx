import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    
    if(loading || isAdminLoading){
    return <div className="text-center flex flex-col items-center justify-between"><progress className="progress w-56"></progress></div>;
    
    }

    if(user && isAdmin){
        return children;
    }

  return  <Navigate to= '/' state={{ from: location }} replace></Navigate>
};

export default AdminRouts;