import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const ItemList = () => {
    const { id } = useParams(); //renders with the path name
    const url = 'http://localhost:4000/products/' + id;
    const {loading, data, error} = useFetch(url);
    //console.log(data)

    const [count, setCount] = useState(1);

    function increment() {
        setCount(c => c + 1)
    }

    function decrement() {
        if(count >= 1) {
            setCount(c => c - 1)
        }
    }

    return (
        <div className="m-10 lg:flex justify-evenly">
            {loading && <p>Loading...</p>}
            {error && <p>Failed to fetch resources</p>}

            <div className="lg:h-[480px] lg:w-[780px] rounded-xl overflow-hidden shadow-xl">
                <img className="object-cover object-center w-full h-full" src={`../img/${data.image}`} alt="" />
            </div>
            
            <div className="flex-col items-center justify-center lg:ml-5">
                {/* Title panel */}
                <div className="border-gray-100 p-5 border-b-4">
                    <h1 className="font-bold text-3xl">{data.title}</h1>
                    <p>{data.description}</p>
                </div>

                {/* Price Panel */}
                <div className="border-gray-100 p-5 border-b-4">
                    <h1 className="font-bold text-2xl">{data.price} or 99.99/month</h1>
                    <p>Suggested payment with 6 month special financing</p>
                </div>

                {/* Item counter */}
                <div className="flex items-center justify-left p-5 ">
                    {/* counter */}
                    <div className="flex items-center justify-evenly
                    bg-slate-200 rounded-full h-[60px] w-[180px]">
                        <button onClick={decrement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <h1 className="font-semibold">{count}</h1>
                        <button onClick={increment}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    {/* item count */}
                    <div className="font-semibold pl-10">
                        <h2>Only <span className="text-orange-500">12 Items</span> left!</h2>
                        <h2>Don't miss it</h2>
                    </div>
                </div>

                {/* Button panel */}
                <div className="flex justify-evenly text-lg
                border-gray-100 border-b-4 p-5">
                    <div className="flex items-center justify-center mr-1
                    bg-green-950 h-18 w-40 md:w-72 rounded-full
                    text-white font-semibold
                    hover:bg-white hover:text-green-950 active:bg-white border-green-950 border
                     transition duration-200 delay-100">
                        <button className="px-4 py-4">Buy Now</button>
                    </div>
                    <div className="flex items-center justify-center ml-1
                     bg-white h-18 w-40 md:w-72 rounded-full
                     text-green-950 font-semibold
                     border-green-950 border
                     active:text-white active:bg-green-950
                     transition duration-200">
                        <button className="px-4 py-4"> Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default ItemList;