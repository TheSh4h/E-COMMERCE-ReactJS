import { Link } from "react-router-dom";
import TopPicksItem from "../../TopPicks/TopPicksItem";
import useFetch from "../../useFetch";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const Outfit = () => {
    const { loading, data, error }  = useFetch('http://localhost:4000/outfits')
    const [items, setItems] = useState(data.slice(0, data.length));
    console.log(items)
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage

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