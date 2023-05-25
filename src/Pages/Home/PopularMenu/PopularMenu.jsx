import { useEffect, useState } from "react";
import SecHeading from "../../../Components/SecHeading";
import PopularMenuCard from "./PopularMenuCard";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect( ()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data.filter(item=> item.category === "popular")
            setMenu(popularItem);
        });
    },[])
    return (
        <section>
            <SecHeading
            heading={"From Our Menu"}
            subHeading={"Check it out"}
            ></SecHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {
                    menu.map(item=><PopularMenuCard
                    item={item}
                    key={item._id}
                    ></PopularMenuCard>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;