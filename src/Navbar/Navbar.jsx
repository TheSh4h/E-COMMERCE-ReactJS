import { useEffect, useState } from 'react';
import Kart from '../img/Kart.png';
import MyAccountElement from './MyAccountElement';
import NavbarCenter from './NavbarCenter';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        //Function to update the showMenu state based on screen size
        const handleScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        window.addEventListener('resize', handleScreenSize);

        handleScreenSize();

        return () => {
            window.removeEventListener('resize', handleScreenSize);
        }
    }, []);

    return ( 
        <nav>
            <div className="flex justify-between items-center m-5 mt-1 mb-0
            border-b">
                <div className="flex items-center cursor-pointer">
                    <img src={Kart} alt="Kart" />
                    <h1 className="text-3xl font-bold text-green-800">E-Kart</h1>
                </div>

                {window.innerWidth >= 1024? <NavbarCenter/>: null}


                <div className="flex items-center">

                    {window.innerWidth >= 1024? <MyAccountElement /> : null}
                
                    {/* Cart */}
                    <div className="flex relative items-center
                    rounded cursor-pointer hover:bg-slate-200 p-2 transition duration-300">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>

                        <h1 className="pl-1">Cart</h1>
                    </div>

                    {/* Hamburger Icon */}
                    <div className='lg:hidden flex items-center
                    rounded cursor-pointer hover:bg-slate-200 p-2 transition duration-300'
                    onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-6 h-6"
                            >
                            <path
                                fillRule="evenodd"
                                d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {showMenu && (
            <div className="lg:hidden top-0 right-0 bg-gray-700 text-white py-2 px-4 shadow-lg
            flex items-center justify-center">
              <div className='m-10 mt-5 mb-5'>
                {/* Dropdown menu items */}
                <NavbarCenter/>
                <MyAccountElement />
              </div>
            </div>
          )}
        </nav>    
     );
}
 
export default Navbar;