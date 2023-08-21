import { useEffect, useState } from 'react';
import Kart from '../img/Kart.png';
import MyAccountElement from './MyAccountElement';
import NavbarCenter from './NavbarCenter';
import CartButton from './cart-button';

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
                    <CartButton />

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