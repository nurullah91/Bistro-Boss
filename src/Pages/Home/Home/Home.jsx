import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <Menu></Menu>
        </div>
    );
};

export default Home;