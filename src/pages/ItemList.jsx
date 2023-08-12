import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ItemList = () => {
    const { id } = useParams(); //renders with the path name
    const url = 'http://localhost:4000/products/' + id;
    const {loading, data, error} = useFetch(url);
    console.log(data)
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Failed to fetch resources</p>}
            
            <h2>{data.title}</h2>
            <img src={`../img/${data.image}`} alt="" />
            <h1>{data.price}</h1>
        </div>
     );
}
 
export default ItemList;