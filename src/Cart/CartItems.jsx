import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart-display-context";

const CartItems = ({ id, image, title, price, quantity }) => {
    const { dispatch } = useContext(CartContext)

    const [itemQuantity, setItemQuantity] = useState(quantity);

    const increaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10)
        
        if(!isNaN(newQuantity) && newQuantity >= 1 ) {
            setItemQuantity(newQuantity)
        }
        else {
            // Handle non-numeric input or input less than 1
            setItemQuantity(null);
        }
    }

    function change(quantity) {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: id, title: title, quantity: quantity }
        })
    }

    useEffect(() => itemQuantity !== "" ? change(itemQuantity) : null, [itemQuantity])

    return ( 
        <>
        <div className="flex p-4 border-b border-gray-300">
            <div className="w-20 h-20 rounded-xl overflow-hidden">
            <img src={`../img/${image}`} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="ml-4">
                <h1 className="text-lg font-semibold">{title}</h1>
                <h2 className="text-gray-600">${price}</h2>
                <div className="flex items-center mt-2">
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        className="w-16 py-1 text-center"
                        value={itemQuantity}
                        onChange={handleQuantityChange}
                    />
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: id, title: title } })}
                className="bg-black text-white font-semibold p-1 rounded-lg mt-2
                hover:bg-slate-600 transition delay-75 px-5 py-1">
                    Delete Item
                </button>
            </div>
        </div>
        </>
     );
}
 
export default CartItems;