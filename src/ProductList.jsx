import ps5 from './img/ps5.jpg';
import bed from './img/bed.jpg';
import hp from './img/hp.jpg';
import hp2 from './img/hp2.jpg';
import aot from './img/aot.jpg';

const ProductList = () => {
    return ( 
        <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-1 gap-4 p-10">

            <div className="itemCard">
                <img src={ps5} alt="playstation 5" className='hover:blur-sm transition duration-150'/>

                <div className='text-center'>
                    <span className='font-semibold'>PlayStation 5</span>
                </div>
                <div className='itemBadge'>
                    <span>In Stock</span>
                </div>
            </div>

            <div className="itemCard">
                <img src={bed} alt="bed" className='object-cover h-48 w-72 hover:blur-sm transition duration-150'/>

                <div className='text-center'>
                    <span className='font-semibold'>bed</span>
                </div>
                <div className='itemBadge'>
                    <span>In Stock</span>
                </div>
            </div>

            <div className="itemCard">
                <img src={hp2} alt="playstation 5" className='object-cover h-48 hover:blur-sm transition duration-150'/>

                <div className='text-center'>
                    <span className='font-semibold'>PlayStation 5</span>
                </div>
                <div className='itemBadge'>
                    <span>In Stock</span>
                </div>
            </div>

            <div className="itemCard">
                <img src={aot} alt="Attack on Titan" className='object-center h-48 w-36 hover:blur-sm transition duration-150'/>

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