import books from '../img/books.jpg';
import furniture from '../img/furniture.jpg';
import gym from '../img/gym.jpg';
import console from '../img/console.jpg';

const Gallery = () => {
    return ( 

    <div className='flex justify-center mb-10'>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 m-10'>

            <div className='card'>
                <div>
                    <img src={gym} alt="failed to load" className='object-cover object-left h-48 sm:h-96 w-full
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Gym</span>
                </div>
            </div>

                <div className='card'>
                <div>
                    <img src={books} alt="failed to load" className='object-cover object-center h-48 sm:h-96 w-full
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Books</span>
                </div>
            </div>

            <div className='card'>
                <div>
                    <img src={furniture} alt="failed to load" className='object-cover object-center h-48 sm:h-96 w-full
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Furniture</span>
                </div>
            </div>

            <div className='card'>
                <div>
                    <img src={console} alt="failed to load" className='object-cover object-center h-48 sm:h-96 w-full
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Electronics</span>
                </div>
            </div>
            
        </div>

    </div>

    );
}
 
export default Gallery;