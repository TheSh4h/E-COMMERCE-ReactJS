import { useContext } from "react";
import { CartContext } from "../context/cart-display-context";

const Cart = () => {
    const { toggleCartMenu } = useContext(CartContext)
    return ( 
        <div className="bg-gray-200 h-screen w-72 fixed top-0 p-1">
            <div onClick={toggleCartMenu} 
            className="h-10 w-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>
            <div className="cart flex items-center justify-center">
                <h1 className="font-semibold text-2xl">Cart</h1>
            </div>
        </div>
     );
}
 
export default Cart;