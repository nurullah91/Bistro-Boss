import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;