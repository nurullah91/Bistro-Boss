import PopularMenuCard from "../Pages/Home/PopularMenu/PopularMenuCard";
import Cover from "../Pages/Shared/Cover/Cover";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {
                    items.map(item => <PopularMenuCard
                        item={item}
                        key={item._id}
                    ></PopularMenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;