import SearchBar from "./SearchBar";

const NavbarCenter = () => {
    const innerWidth = window.innerWidth;
    return ( 
        <div className={innerWidth >= 1024? 'flex': 'flex-col'}>
                        {innerWidth <= 1024? <SearchBar />: null}
                        <div className="navbarStart"
                        >    
                            <h1>Deals</h1>
                        </div>

                        <div className="navbarStart"
                        >
                            <h1>What's New</h1>
                        </div>

                        <div className="navbarStart"
                        >
                            <h1>Delivery</h1>
                        </div>

                    {/* Search field */}
                    {innerWidth >= 1024? <SearchBar />: null}
        </div>
     );
}
 
export default NavbarCenter;