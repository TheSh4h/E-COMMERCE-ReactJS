import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useFetch from "../useFetch";
import db from "../data/db.json";

const New = () => {
    //UNCOMMENT WHEN BACKEND READY
    //const { loading, data, error } = useFetch('http://localhost:4000/products');

    const data = db["products"]

    return ( 
        <div className='m-10'>
            <h1 className='font-semibold text-xl'>Top picks for you!</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
                
                {/* {loading && <p>Loading...</p>} */}
                {/* {error && <p>Failed to load resources</p>} */}

                {data.map((product, index) => (
                    <Link to={`${product.id}`} key={index}>
                        <ProductCard
                            key={index}
                            image={`../img/${product.image}`}
                            title={product.title}
                            description={product.description}
                            price={product.price} 
                            tag={product.tag} 
                        />
                    </Link>
                ))}

            </div>
        </div>
     );
}
 
export default New;