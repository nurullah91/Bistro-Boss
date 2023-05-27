import { Link } from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";
import Cover from "../Pages/Shared/Cover/Cover";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="my-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {
                    items.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }

            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className='btn btn-outline mt-8 border-b-4 border-0'>Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;