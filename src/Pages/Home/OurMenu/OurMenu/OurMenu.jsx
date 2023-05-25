import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuCover from '../../../../assets/menu/banner3.jpg'
import useMenu from '../../../../hooks/useMenu';
import SecHeading from '../../../../Components/SecHeading';
import MenuCategory from '../../../../Components/MenuCategory';
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'


const OurMenu = () => {
    const [menu] = useMenu();

    const desserts = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const soup = menu.filter(item=>item.category==='soup')
    const salad = menu.filter(item=>item.category==='salad')
    const offered = menu.filter(item=>item.category==='offered')
    return (
        <div>

            
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>

            <Cover img={menuCover} title='Our Menu'></Cover>
            {/* main cover */}
            <SecHeading subHeading="Don't Miss" heading="Today's Offer"></SecHeading>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts menu item */}
            <MenuCategory items={desserts} title='Dessert' img={dessertImg}></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory items={pizza} title='Pizza&apos;s' img={pizzaImg}></MenuCategory>
           
            {/* pizza menu item */}
            <MenuCategory items={soup} title='Soup' img={soupImg}></MenuCategory>
           
            {/* pizza menu item */}
            <MenuCategory items={salad} title='Salad' img={saladImg}></MenuCategory>
           
        </div>
    );
};

export default OurMenu;