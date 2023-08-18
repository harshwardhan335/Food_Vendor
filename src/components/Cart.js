import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.length);
    return (
        <div>
            <h1 className="font-bold text-3xl">
            Cart Items - {cartItems.length}
            </h1>
        </div>
    );
};
export default Cart;