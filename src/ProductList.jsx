import ps5 from './img/ps5.jpg';

const ProductList = () => {
    return ( 
        <div className="flex justify-center grid-cols-1 gap-4 p-10">

            <div className="itemCard">
                <img src={ps5} alt="playstation 5" className='hover:blur-sm transition duration-150'/>

                <div className='text-center'>
                    <span className='font-semibold'>PlayStation 5</span>
                </div>
                <div className='itemBadge'>
                    <span>In Stock</span>
                </div>
            </div>

        </div>
     );
}
 
export default ProductList;