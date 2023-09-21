import { useContext } from "react";
import { searchContext } from "./context/search-context";
import TopPicksItem from "./TopPicks/TopPicksItem";
import { Link, useNavigate } from "react-router-dom";

const SearchPage = () => {
    const { value } = useContext(searchContext)
    const navigate = useNavigate();
    console.log(value)
    return ( 
        <div>
            {value.map((product, index) => (
                    <div onClick={() => {
                        navigate(`/${product.type}/${product.id}`)
                    }}>
                        <TopPicksItem
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