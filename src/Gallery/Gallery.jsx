import books from '../img/books.jpg';
import furniture from '../img/furniture.jpg';
import gym from '../img/gym.jpg';
import console from '../img/console.jpg';
import GalleryComponent from './GalleryComponent';

const Gallery = () => {
    const categories = [
        { img: gym, title: 'Gym', css: 'object-cover object-left h-48 sm:h-96 w-full rounded-2xl'},
        { img: books, title: 'Books', css: 'object-cover object-center h-48 sm:h-96 w-full rounded-2xl'},
        { img: furniture, title: 'Furniture', css: 'object-cover object-center h-48 sm:h-96 w-full rounded-2xl'},
        { img: console, title: 'Electronics', css: 'object-cover object-center h-48 sm:h-96 w-full rounded-2xl'},
    ]
    return ( 

    <div className='flex justify-center mb-10'>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 m-10'>

            {categories.map((category, index) => (
                <GalleryComponent
                key={index}
                img={category.img}
                css={category.css}
                title={category.title}
                />
            ))}
            
        </div>

    </div>

    );
}
 
export default Gallery;