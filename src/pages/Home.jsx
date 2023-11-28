import Category from "../components/Category/Category";
import TopPicks from "../components/TopPicks/TopPicks";

const Home = () => {
    return ( 
        <div className="container mx-auto">
            <Category />
            <div className="p-5">
                <TopPicks id="products" />
            </div>
        </div>
     );
}
 
export default Home;