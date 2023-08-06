import GalleryItem from "./GalleryItem";
import { Link } from "react-router-dom";

const GalleryComponent = ({img, css, title}) => {
    return ( 
        <div className='card'>
                <div>
                    <Link to={`/${title}`}> 
                        <img src={img} alt="failed to load" className={css}/>
                    </Link>
                    
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>{title}</span>
                </div>
        </div>
     );
}
 
export default GalleryComponent;