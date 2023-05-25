import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuCover from '../../../../assets/menu/banner3.jpg'
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>

            <Cover img={menuCover} title='Our Menu'></Cover>
           
        </div>
    );
};

export default OurMenu;