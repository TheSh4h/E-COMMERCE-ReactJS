import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = (props) => {

    const [showCart, setShowCart] = useState(false);

    const toggleCartMenu = () => {
        setShowCart(!showCart);
    }

    console.log(showCart);

    const contextValue = {
        showCart,
        setShowCart,
        toggleCartMenu
    };

    return ( 
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;