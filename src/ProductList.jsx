import ps5 from './img/ps5.jpg';

const ProductList = () => {
    return ( 
        <div className="flex justify-center grid-cols-1 gap-4 p-10">

            <div className="itemCard transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110">
                <img src={ps5} alt="playstation 5" className='hover:blur-sm transition duration-150'/>

                <div className='text-center'>
                    <span className='font-semibold'>PlayStation 5</span>
                </div>
                <div className='absolute top-0 left-2 bg-white rounded-lg p-1 mt-1 text-green-950'>
                    <span>In Stock</span>
                </div>
            </div>

        </div>
     );
}
 
export default ProductList;