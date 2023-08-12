import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ItemList = () => {
    const { title } = useParams(); //renders with the path name
    const url = 'http://localhost:4000/GalleryItems' + title;
    const {loading, data, error} = useFetch(url);
    return (
        <div>
            <h2>{title}</h2>
        </div>
     );
}
 
export default ItemList;