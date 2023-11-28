import Category from "../components/Category/Category";
import TopPicks from "../components/TopPicks/TopPicks";

const Home = () => {
    return ( 
        <div className="flex flex-col justify-center items-center">
            <Category />
            <TopPicks id="products" />
        </div>
     );
}
 
export default Home;