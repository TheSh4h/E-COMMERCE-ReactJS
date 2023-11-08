import ProductCard from '../ProductCard';
//import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
import db from "../../data/db.json";


const TopPicks = ({ id }) => {

    // const { loading, data, error } = useFetch('http://localhost:4000/' + id);

    //Uncomment these lines when the backend is ready

    return ( 
        <div className='m-10'>
            <h1 className='font-semibold text-xl'>Top picks for you!</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
                
                {/* {loading && <p>Loading...</p>}
                {error && <p>Failed to load resources</p>} */}

                {db[id].map((product, index) => (
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
 
export default TopPicks;