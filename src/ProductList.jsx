import ProductItem from './ProdectItem';
import ps5 from './img/ps5.jpg';
import bed from './img/bed.jpg';
import hp from './img/hp.jpg';
import hp2 from './img/hp2.jpg';
import aot from './img/aot.jpg';
import macbook from './img/macbook.jpg';
import db from './img/db.jpg';
import kb from './img/kb.jpg';


const ProductList = () => {

    const products = [
        { image: ps5, title:'PlayStation 5', description: 'Description goes here', price: '$500', tag: 'USD' },
        { image: aot, title:'Attack on Titan Manga', description: 'Attack on Titan Manga', price: '$15.99', tag: 'USD' },
        { image: hp2, title:'Headphone', description: 'Description goes here', price: '$150.99', tag: 'USD' },
        { image: hp, title:'Audionic Headphone', description: 'Description goes here', price: '$250.99', tag: 'USD' },
        { image: macbook, title:'Apple Macbook Air M1', description: 'Description goes here', price: '$1500', tag: 'USD' },
        { image: db, title:'Hex Dumbells', description: 'Description goes here', price: '$49.99', tag: 'USD' },
        { image: kb, title:'Kettlebell 32kg', description: 'Description goes here', price: '$80.00', tag: 'USD' },       
    ]

    return ( 
        <div className='m-10'>
            <h1 className='font-semibold text-xl'>Top picks for you!</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">

                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price} 
                        tag={product.tag} 
                    />
                ))}

            </div>
        </div>
     );
}
 
export default ProductList;