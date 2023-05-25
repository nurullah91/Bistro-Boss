
import SecHeading from "../../../Components/SecHeading";
import useMenu from "../../../hooks/useMenu";
import PopularMenuCard from "./PopularMenuCard";


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
                    popular.map(item=><PopularMenuCard
                    item={item}
                    key={item._id}
                    ></PopularMenuCard>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;