const ProductCard = ( { image, title, description, price, tag } ) => {
    return ( 
        <div className="itemCard">
                <div className="h-64 w-96 overflow-hidden">
                    <img className="object-cover w-full h-full" src={image} alt={title} />
                </div>
                <div className="p-4">
                    <p className="text-gray-800 text-xl font-semibold mb-2">{title}</p>
                    <p className="text-gray-600 text-base">{description}</p>
                    <div className="mt-4">
                        <span className="text-gray-800 text-lg font-semibold">${price}</span>
                        <span className="text-gray-600 text-sm ml-2">{tag}</span>
                    </div>
                </div>
        </div>
     );
}
 
export default ProductCard;