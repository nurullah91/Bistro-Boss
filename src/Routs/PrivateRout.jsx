import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
  return <div className="text-center flex-col items-center justify-between"><progress className="progress w-56"></progress></div>;
  }

    if(user){
        return children;
    }

  return  <Navigate to= '/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRout;