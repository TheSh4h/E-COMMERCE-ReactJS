import books from '../img/books.jpg';
import furniture from '../img/furniture.jpg';
import gym from '../img/gym.jpg';
import console from '../img/console.jpg';
import GalleryComponent from './GalleryComponent';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const categories = [
        { img: gym, title: 'Gym'},
        { img: books, title: 'Books'},
        { img: furniture, title: 'Furniture'},
        { img: console, title: 'Electronics'},
    ]
    return ( 

    <div className='flex justify-center mb-10'>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 m-10'>

            {categories.map((category, index) => (
                <Link to={`/${category.title}`}>
                    <GalleryComponent
                    key={index}
                    img={category.img}
                    title={category.title}
                    />
                </Link>
            ))}
            
        </div>

    </div>

    );
}
 
export default Gallery;