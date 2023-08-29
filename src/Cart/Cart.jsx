import { useContext } from "react";
import { CartContext } from "../context/cart-display-context";
import CartItems from "./CartItems"

const Cart = () => {
    const { toggleCartMenu, cartItems } = useContext(CartContext)
    return ( 
        <div className="bg-gray-200 h-screen w-72 fixed top-0 p-1">
            <div className="flex justify-start">
                <button onClick={toggleCartMenu} className="h-8 w-8 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center justify-center my-4">
                <h1 className="font-semibold text-2xl">Cart</h1>
            </div>
            { cartItems.map(item => (
                <CartItems
                key={item.id}
                id={item.id} 
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                />
            ))}
        </div>
     );
}
 
export default Cart;