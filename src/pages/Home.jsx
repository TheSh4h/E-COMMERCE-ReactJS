import Category from "../components/Category/Category";
import TopPicks from "../components/TopPicks/TopPicks";

const Home = () => {
    return ( 
        <div className="container mx-auto">
            <Category />
            <TopPicks id="products" />
        </div>
     );
}
 
export default Home;