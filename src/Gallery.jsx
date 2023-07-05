import books from './img/books.jpg';
import furniture from './img/furniture.jpg';
import gym from './img/gym.jpg';
import console from './img/console.jpg';

const Gallery = () => {
    return ( 

    <div>

        <div className='flex justify-center grid-cols-4 gap-4 mt-10'>

            <div className='card'>
                <div>
                    <img src={gym} alt="failed to load" className='object-cover object-left h-96 w-48
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Gym</span>
                </div>
            </div>

                <div className='card'>
                <div>
                    <img src={books} alt="failed to load" className='object-none object-center h-96 w-48
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Books</span>
                </div>
            </div>

            <div className='card'>
                <div>
                    <img src={furniture} alt="failed to load" className='object-cover object-right h-96 w-48
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Furniture</span>
                </div>
            </div>

            <div className='card'>
                <div>
                    <img src={console} alt="failed to load" className='object-cover object-center h-96 w-48
                    rounded-2xl'/>
                </div>
                <div className='badge'>
                    <span className='font-semibold text-white'>Tech</span>
                </div>
            </div>
            
        </div>

    </div>

    );
}
 
export default Gallery;