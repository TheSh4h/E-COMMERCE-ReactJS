import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavbarCenter = () => {
    const innerWidth = window.innerWidth;
    return ( 
        <div className={innerWidth >= 1024? 'flex': 'flex-col'}>
                        {innerWidth <= 1024? <SearchBar />: null}
                        <NavLink to={'Deals'}
                         style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "600" : ""
                            };
                          }}
                        
                        >
                            <div className="navbarStart">    
                                <h1>Deals</h1>
                            </div>
                        </NavLink>

                        <NavLink to={"What's New"}
                         style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "600" : ""
                            };
                          }}
                        >
                            <div className="navbarStart">
                                <h1>What's New</h1>
                            </div>
                        </NavLink>

                    {/* Search field */}
                    {innerWidth >= 1024? <SearchBar />: null}
        </div>
     );
}
 
export default NavbarCenter;