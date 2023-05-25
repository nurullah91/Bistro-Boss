import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <Menu></Menu>
            <Featured></Featured>
        </div>
    );
};

export default Home;