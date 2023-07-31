const GalleryComponent = (img) => {

    return ( 
        <div className='card'>
                <div>
                    <img src={img} alt="failed to load" className='object-cover object-left h-48 sm:h-96 w-full
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Gym</span>
                </div>
        </div>
     );
}
 
export default GalleryComponent;