import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart-display-context";

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
                <div className="flex items-center mt-2 rounded-s-2xl">
                    <button
                        className="bg-slate-200 hover:bg-slate-400 transition duration-300 rounded-l-2xl px-2 py-1"
                        onClick={decreaseQuantity}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>
                    <input
                        type="text"
                        className="w-16 py-1 text-center"
                        value={itemQuantity}
                        onChange={handleQuantityChange}
                    />
                    <button
                        className="bg-slate-200 hover:bg-slate-400 transition duration-300 rounded-r-2xl px-2 py-1 rounded"
                        onClick={increaseQuantity}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: id, title: title } })}
                className="bg-green-950 text-white font-semibold p-1 rounded-2xl mt-2
                hover:bg-white hover:text-black border border-green-950 transition duration-300 px-5 py-1">
                    Delete Item
                </button>
            </div>
        </div>
        </>
     );
}
 
export default CartItems;