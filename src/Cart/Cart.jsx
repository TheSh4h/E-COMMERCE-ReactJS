import { useContext } from "react";
import { CartContext } from "../context/cart-display-context";

const Cart = () => {
    const { toggleCartMenu } = useContext(CartContext)
    return ( 
        <div className="bg-gray-200 h-screen w-72 fixed top-0 p-1">
            <div onClick={toggleCartMenu} 
            className="h-10 w-10 cursor-pointer">X</div>
            <h1>Cart</h1>
        </div>
     );
}
 
export default Cart;