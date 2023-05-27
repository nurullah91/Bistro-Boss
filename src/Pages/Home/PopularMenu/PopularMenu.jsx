
import SecHeading from "../../../Components/SecHeading";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../Components/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');
   
    return (
        <section>
            <SecHeading
            heading={"From Our Menu"}
            subHeading={"Check it out"}
            ></SecHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {
                    popular.map(item=><MenuItem
                    item={item}
                    key={item._id}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;