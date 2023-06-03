
import { FaBook, FaCalendar, FaCommentDots, FaEnvelope, FaHome, FaRegCalendarAlt, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { GiHamburgerMenu, } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                {/* Page content */}
                <Outlet></Outlet>


            </div>


            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">

                    {/* sidebar content  */}
                    {
                        isAdmin ? <>

                            <li><NavLink to='home'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='add-item'><FaUtensils></FaUtensils> Add items</NavLink></li>
                            <li><NavLink to='manage-items'><FaWallet></FaWallet> Manage items</NavLink></li>
                            <li><NavLink to='manage-bookings'><FaBook></FaBook>Manage Booking</NavLink></li>
                            <li><NavLink to='all-users'><FaUsers></FaUsers> All Users</NavLink></li>


                        </> : <>

                            <li><NavLink to='home'><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to='/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                            <li><NavLink to='history'><FaWallet></FaWallet> Payment history</NavLink></li>
                            <li><NavLink to='my-cart'>
                                <FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge bg-red-500 border-none">+{cart?.length || 0}</span>
                            </NavLink></li>
                            <li><NavLink to='add-review'><FaCommentDots></FaCommentDots> Add Review</NavLink></li>
                            <li><NavLink to='bookings'><FaRegCalendarAlt></FaRegCalendarAlt> My Bookings</NavLink></li>
                        </>
                    }



                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><GiHamburgerMenu></GiHamburgerMenu> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope></FaEnvelope> Contact</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;