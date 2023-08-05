import ProductItem from './ProductItem';
import ps5 from './img/ps5.jpg';
import bed from './img/bed.jpg';
import hp from './img/hp.jpg';
import hp2 from './img/hp2.jpg';
import aot from './img/aot.jpg';
import macbook from './img/macbook.jpg';
import db from './img/db.jpg';
import kb from './img/kb.jpg';
import { useState, useEffect } from 'react';


const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, []);

    return ( 
        <div className='m-10'>
            <h1 className='font-semibold text-xl'>Top picks for you!</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">

                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        image={`./img/${product.image}`}
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