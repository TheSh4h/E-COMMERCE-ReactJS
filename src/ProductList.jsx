import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';


const ProductList = () => {

    const { loading, data, error } = useFetch('http://localhost:4000/products');

    return ( 
        <div className='m-10'>
            <h1 className='font-semibold text-xl'>Top picks for you!</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
                
                {loading && <p>Loading...</p>}
                {error && <p>Failed to load resources</p>}

                {data.map((product, index) => (
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