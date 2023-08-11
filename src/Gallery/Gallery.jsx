import books from '../img/books.jpg';
import furniture from '../img/furniture.jpg';
import gym from '../img/gym.jpg';
import console from '../img/console.jpg';
import GalleryComponent from './GalleryComponent';
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';

const Gallery = () => {
    const { loading, products, error } = useFetch('http://localhost:4000/GalleryItems');
    
    return ( 

    <div className='flex justify-center mb-10'>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 m-10'>

            {loading && <p>Loading...</p>}
            {error && <p>Failed to load resources</p>}

            {products.map((category, index) => (
                <Link to={`/${category.title}`}>
                    <GalleryComponent
                    key={index}
                    img={`../img/${category.img}`}
                    title={category.title}
                    />
                </Link>
            ))}
            
        </div>

    </div>

    );
}
 
export default Gallery;