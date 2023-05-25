import { useEffect, useState } from "react";
import SecHeading from "../../../Components/SecHeading";
import MenuCard from "./MenuCard";


const Menu = () => {
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
                    menu.map(item=><MenuCard
                    item={item}
                    key={item._id}
                    ></MenuCard>)
                }
            </div>

        </section>
    );
};

export default Menu;