import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';


const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products')
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