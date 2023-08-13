import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ItemList = () => {
    const { id } = useParams(); //renders with the path name
    const url = 'http://localhost:4000/products/' + id;
    const {loading, data, error} = useFetch(url);
    console.log(data)
    return (
        <div className="m-10 lg:flex justify-evenly">
            {loading && <p>Loading...</p>}
            {error && <p>Failed to fetch resources</p>}

            <div className="lg:h-[480px] lg:w-[720px] rounded-xl overflow-hidden shadow-xl">
                <img className="object-cover object-center w-full h-full" src={`../img/${data.image}`} alt="" />
            </div>

            <div className="flex-col items-center justify-center">
                <div className="border-gray-100 p-5 border-b-4">
                    <h1 className="font-bold text-3xl">{data.title}</h1>
                    <p>{data.description}</p>
                </div>

                <div className="border-gray-100 p-5 border-b-4">
                    <h1 className="font-bold text-2xl">{data.price} or 99.99/month</h1>
                    <p>Suggested payment with 6 month special financing</p>
                </div>

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