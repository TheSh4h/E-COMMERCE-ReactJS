import "./paginate.css"
import { Link } from "react-router-dom";
import TopPicksItem from "../../TopPicks/TopPicksItem";
import useFetch from "../../useFetch";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import db from "../../data/db.json";

const Outfit = () => {
    //UNCOMMENT WHEN BACKEND READY
    //const { loading, data, error }  = useFetch('http://localhost:4000/outfits')

    const data = db["outfits"]
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [pageNumber]);

    useEffect(() => {
        //if(!loading) {
            setItems(data.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage))
        //}
    }, [data, pageNumber]);

    const pageCount = Math.ceil(data.length / itemsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    return ( 
        <div>
                {/* {loading && <p>Loading...</p>} */}
                {/* {error && <p>Failed to load resources</p>} */}
                
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 m-5">
                {items.map((product, index) => (
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
                <div className="paginate">
                    <ReactPaginate 
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    />
                </div>
        </div>
     );
}
 
export default Outfit;