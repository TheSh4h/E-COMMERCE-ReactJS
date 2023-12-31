import books from '../../img/books.jpg';
import outfit from '../../img/G outfits.jpg';
import gym from '../../img/gym.jpg';
import console from '../../img/console.jpg';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categories = [
        { img: gym, title: 'Gym'},
        { img: books, title: 'Books'},
        { img: outfit, title: "Men's Outfit"},
        { img: console, title: 'Electronics'},
    ]
    return ( 

    <div className='flex justify-center mb-10 z-0'>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 m-10'>

            {categories.map((category, index) => (
                <Link to={`/${category.title}`} key={index}>
                    <CategoryCard
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
 
export default Category;