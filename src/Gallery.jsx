import books from './img/books.jpg';
import furn from './img/furn.jpg';
import furniture from './img/furniture.jpg';
import gym from './img/gym.jpg';

const Gallery = () => {
    return ( 

    <div>

        <div className='relative h-96 w-48'>
            <div>
                <img src={gym} alt="failed to load" className='object-cover object-left h-96 w-48
                rounded-2xl'/>
            </div>
            <div className='absolute top-2 left-0 right-0 flex items-center justify-center
            backdrop-filter backdrop-blur-2xl'>
                <span className='font-semibold text-white'>Gym</span>
            </div>
        </div>

        <div className='relative h-96 w-48'>
            <div>
                <img src={books} alt="failed to load" className='object-none object-center h-96 w-48
                rounded-2xl'/>
            </div>
            <div className='absolute top-2 left-0 right-0 flex items-center justify-center
            backdrop-filter backdrop-blur-2xl'>
                <span className='font-semibold text-white'>Books</span>
            </div>
        </div>

        <div className='relative h-96 w-48'>
            <div>
                <img src={furniture} alt="failed to load" className='object-cover object-right h-96 w-48
                rounded-2xl'/>
            </div>
            <div className='absolute top-2 left-0 right-0 flex items-center justify-center
            backdrop-filter backdrop-blur-2xl'>
                <span className='font-semibold text-white'>Furniture</span>
            </div>
        </div>

    </div>

    );
}
 
export default Gallery;