import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Success!',
                    'Log out successful!',
                    'success'
                )
            })
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        {
            isAdmin?<li><Link to='/dashboard/admin-home'>Dashboard</Link></li>:
            <li><Link to='/dashboard/user-home'>Dashboard</Link></li>
        }


        <li><Link to='dashboard/my-cart'>
            <button className="gap-2">
              <FaShoppingCart className="inline mr-2 text-3xl"></FaShoppingCart>
                <div className="badge  bg-red-500 border-none">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        {user ? <>
            <li><button className="font-bold text-xl" onClick={handleLogOut}>Log out</button></li>
        </> :
            <>
                <li><Link className="font-bold text-xl" to='/login'>Login</Link></li>
            </>}


    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;