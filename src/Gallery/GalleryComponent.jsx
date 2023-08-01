import GalleryItem from "./GalleryItem";

const GalleryComponent = ({img, css, title}) => {
    return ( 
        <div className='card'>
                <div>
                    <a href={<GalleryItem />}>
                    <img src={img} alt="failed to load" className={css}/>
                    </a>
                    
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>{title}</span>
                </div>
        </div>
     );
}
 
export default GalleryComponent;