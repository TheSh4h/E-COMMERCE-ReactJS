import { useContext } from "react";
import { searchContext } from "../context/search-context";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const { value, loading } = useContext(searchContext)
    const navigate = useNavigate();
    console.log(value)
    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {loading && <div>Loading...</div>}
            {value.length === 0 ? <div>No results found</div>: null}
            {value.map((product, index) => (
                    <div onClick={() => {
                        navigate(`/${product.type}/${product.id}`)
                    }}>
                        <ProductCard
                            key={index}
                            image={`../img/${product.image}`}
                            title={product.title}
                            description={product.description}
                            price={product.price} 
                            tag={product.tag} 
                        />
                    </div>
                ))
            }
        </div>
     );
}
 
export default SearchPage;