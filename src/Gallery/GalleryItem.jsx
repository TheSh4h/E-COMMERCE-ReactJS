import { useParams } from "react-router-dom";

const GalleryItem = () => {
    const { categoryItem } = useParams();
    return (
        <div>
            <h2>{categoryItem}</h2>
        </div>
     );
}
 
export default GalleryItem;