import { createContext, useReducer, useState } from "react";

export const CartContext = createContext(null);

function reducer(cartItems, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const itemToAdd = action.payload
            let itemExists = false

            for(const item of cartItems) {
                if (item.id === itemToAdd.id && item.title === itemToAdd.title) {
                    itemExists = true
                }
            }
            if(!itemExists){
                return [...cartItems, newItem(itemToAdd)];
            }
            
            return cartItems;

        case 'UPDATE_QUANTITY':
            return cartItems.map(item => {
                if ((item.title === action.payload.title) && (item.id === action.payload.id)) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
        default:
            return cartItems;
    }
}

function newItem(value){
    return { id: value.id, title: value.title, quantity: value.quantity, image: value.image, price: value.price }
}

const CartContextProvider = (props) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, dispatch] = useReducer(reducer, [])

    const toggleCartMenu = () => {
        setShowCart(!showCart);
    }

    const contextValue = {
        showCart,
        setShowCart,
        toggleCartMenu,
        cartItems,
        dispatch
    };

    console.log(cartItems)

    return ( 
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;