import { Link } from "react-router-dom";
import TopPicksItem from "../../TopPicks/TopPicksItem";
import useFetch from "../../useFetch";

const Outfit = () => {
    const { loading, data, error }  = useFetch('http://localhost:4000/outfits')
    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 m-5">
            {loading && <p>Loading...</p>}
            {error && <p>Failed to load resources</p>}

            {data.map((product, index) => (
                <Link to={`/Men's Outfit/${product.id}`} key={index}>
                    <TopPicksItem
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
     );
}
 
export default Outfit;