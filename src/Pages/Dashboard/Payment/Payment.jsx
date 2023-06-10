import { loadStripe } from "@stripe/stripe-js";
import SecHeading from "../../../Components/SecHeading";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce( (sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-full">

            <SecHeading heading={'Payment'} subHeading={'Please Process'}></SecHeading>
            <h2 className="text-4xl text-center text-rose-600">Taka dia ja vai</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;