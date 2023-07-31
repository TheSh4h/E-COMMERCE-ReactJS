const GalleryComponent = ({img, css, title}) => {

    return ( 
        <div className='card'>
                <div>
                    <img src={img} alt="failed to load" className={css}/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>{title}</span>
                </div>
        </div>
     );
}
 
export default GalleryComponent;