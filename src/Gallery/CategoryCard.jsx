
const CategoryCard = ({img, title}) => {
    return ( 
        <div className='card'>
                <div>
                    <img src={img} 
                    alt="failed to load" 
                    className='object-cover object-center h-48 sm:h-96 w-full rounded-2xl'
                    />                    
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>{title}</span>
                </div>
        </div>
     );
}
 
export default CategoryCard;