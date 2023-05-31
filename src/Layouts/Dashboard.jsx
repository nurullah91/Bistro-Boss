
import { FaCalendar, FaCommentDots, FaEnvelope, FaHome, FaRegCalendarAlt, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { GiHamburgerMenu, } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                {/* Page content */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>


            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">

                    {/* sidebar content  */}
                    <li><NavLink to='home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to='history'><FaWallet></FaWallet> Payment history</NavLink></li>
                    <li><NavLink to='my-cart'>
                        <FaShoppingCart></FaShoppingCart> My Cart
                        <span className="badge bg-red-500 border-none">+{cart?.length || 0}</span>
                    </NavLink></li>
                    <li><NavLink to='add-review'><FaCommentDots></FaCommentDots> Add Review</NavLink></li>
                    <li><NavLink to='bookings'><FaRegCalendarAlt></FaRegCalendarAlt> My Bookings</NavLink></li>

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