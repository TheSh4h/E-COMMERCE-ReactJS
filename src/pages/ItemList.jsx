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
                    <h1 className="font-semibold text-3xl mb-2">{data.title}</h1>
                    <p className="text-slate-500 text-xs font-semibold">{data.description}</p>
                </div>

                {/* Price Panel */}
                <div className="border-gray-100 p-5 border-b-4">
                    <h1 className="font-semibold text-2xl mb-2">{data.price} or 99.99/month</h1>
                    <p className="text-slate-500 text-xs font-semibold">Suggested payment with 6 month special financing</p>
                </div>

                {/* Item counter */}
                <div className="flex items-center justify-left p-5 mt-2">
                    {/* counter */}
                    <div className="flex items-center justify-evenly
                    bg-slate-200 rounded-full h-[60px] w-[180px]">
                        <button disabled={count === 1} onClick={decrement}>
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
                <div className="flex justify-evenly text-lg p-5">
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

                {/* Delivery */}
                <div className="border-slate-200 border-2 rounded-xl m-5">
                    <div className="flex items-center justify-start border-b-2 p-2">
                        <svg className="text-orange-500" fill="currentColor" height="70" width="70" viewBox="0 0 512 512" ><g id="Layer_1"/><g id="Layer_2"><g><path d="M401.8,206.5c-1.4-2-3.7-3.2-6.1-3.2h-46.5v-19.8c0-4.1-3.4-7.5-7.5-7.5H173.2c-4.1,0-7.5,3.4-7.5,7.5v121.2    c0,4.1,3.4,7.5,7.5,7.5h21.2c3.9,13.6,16.5,23.7,31.3,23.7s27.4-10,31.3-23.7h83.1c3.9,13.6,16.5,23.7,31.3,23.7    s27.4-10,31.3-23.7h15.5c4.1,0,7.5-3.4,7.5-7.5V243c0-1.6-0.5-3.1-1.4-4.3L401.8,206.5z M410.8,245.2h-33.6v-26.8h14.7    L410.8,245.2z M180.7,191.1h153.5v106.2h-76.5c-2.9-15.1-16.1-26.5-32-26.5s-29.2,11.4-32,26.5h-13V191.1z M225.7,320.9    c-9.7,0-17.6-7.9-17.6-17.6s7.9-17.6,17.6-17.6s17.6,7.9,17.6,17.6S235.4,320.9,225.7,320.9z M371.5,320.9    c-9.7,0-17.6-7.9-17.6-17.6s7.9-17.6,17.6-17.6s17.6,7.9,17.6,17.6S381.2,320.9,371.5,320.9z M403.5,297.3    c-2.9-15.1-16.1-26.5-32-26.5c-8.6,0-16.5,3.4-22.3,8.9v-61.3h12.9v34.3c0,4.1,3.4,7.5,7.5,7.5h41.3v37.1H403.5z"/><path d="M93.6,191.1h53.5c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H93.6c-4.1,0-7.5,3.4-7.5,7.5S89.5,191.1,93.6,191.1z"/><path d="M147.1,203.4h-41.2c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h41.2c4.1,0,7.5-3.4,7.5-7.5S151.3,203.4,147.1,203.4z"/><path d="M147.1,230.7h-26c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h26c4.1,0,7.5-3.4,7.5-7.5S151.3,230.7,147.1,230.7z"/>
                            <path d="M147.1,258h-9c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h9c4.1,0,7.5-3.4,7.5-7.5S151.3,258,147.1,258z"/></g></g>
                        </svg>
                        <div>
                            <h2 className="text-xl font-semibold">Free Delivery</h2>
                            <p className="text-slate-500 underline">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start p-2">
                        <svg className="text-orange-500 ml-4" height="50" width="50" fill="currentColor" viewBox="0 0 512 512"><g id="Layer_1"/><g id="Layer_2"><g><path d="M410.9,186.6c0-0.1,0-0.2-0.1-0.2c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3    c-0.2-0.5-0.4-0.9-0.7-1.3c0,0,0,0,0,0l-65-95.5c-1.4-2.1-3.7-3.3-6.2-3.3h-63.6h-37.9h-63.6c-2.5,0-4.8,1.2-6.2,3.3l-65,95.5    c0,0,0,0,0,0c-0.3,0.4-0.5,0.9-0.7,1.3c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2-0.1,0.3-0.1,0.5    c0,0.1,0,0.2-0.1,0.2c-0.1,0.5-0.2,1-0.2,1.5c0,0,0,0,0,0v231.3c0,4.1,3.4,7.5,7.5,7.5h295.1c4.1,0,7.5-3.4,7.5-7.5V188.1    c0,0,0,0,0,0C411,187.6,411,187.1,410.9,186.6z M389.3,180.6h-96.9l-9.1-80.5h51.2L389.3,180.6z M233.7,195.6h44.5v55L260.3,238    c-1.3-0.9-2.8-1.4-4.3-1.4s-3,0.5-4.3,1.4l-17.9,12.6V195.6z M268.2,100.1l9.1,80.5h-42.7l9.1-80.5H268.2z M177.5,100.1h51.2    l-9.1,80.5h-96.9L177.5,100.1z M396,411.9H116V195.6h102.8v69.4c0,2.8,1.6,5.4,4,6.7c2.5,1.3,5.5,1.1,7.8-0.5l25.4-17.9l25.4,17.9    c1.3,0.9,2.8,1.4,4.3,1.4c1.2,0,2.4-0.3,3.5-0.8c2.5-1.3,4-3.9,4-6.7v-69.4H396V411.9z"/><path d="M201,330.4h-53.2c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5H201c4.1,0,7.5-3.4,7.5-7.5S205.1,330.4,201,330.4z"/>
                            <path d="M174.4,361.9h-26.6c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h26.6c4.1,0,7.5-3.4,7.5-7.5S178.5,361.9,174.4,361.9z"/></g></g>
                        </svg>
                        <div>
                            <h2 className="text-xl font-semibold">Return Delivery</h2>
                            <p className="text-slate-500">Free 30days elivery Returns. <span className="underline">Details</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default ItemList;