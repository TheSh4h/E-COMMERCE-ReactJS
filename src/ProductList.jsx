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
    return ( 
        <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-2 gap-4 p-10">

            <ProductItem image={ps5} title="PlayStation 5" description="Description goes here" price="$500" tag="USD" />
            <ProductItem image={aot} title="Attack on Titan Manga" description="Description goes here" price="$500" tag="USD" />
            <ProductItem image={hp} title="Audionic Headphone" description="Description goes here" price="$500" tag="USD" />
            <ProductItem image={hp2} title="Headphone" description="Description goes here" price="$500" tag="USD" />
            <ProductItem image={macbook} title="Apple Macbook Air M1" description="Description goes here" price="$500" tag="USD" />
            <ProductItem image={db} title="Hex Dumbbells" description="10kg Dumbells set" price="$49.99" tag="USD" />
            <ProductItem image={kb} title="Kettlebell 32kg" description="cast iron" price="$80.00" tag="/USD" />

        </div>
     );
}
 
export default ProductList;