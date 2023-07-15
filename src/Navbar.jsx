import { useState } from 'react';
import Kart from './img/Kart.png';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return ( 
        <div className="flex justify-between items-center m-5
        border-b">
            <div className="flex items-center cursor-pointer">
                <img src={Kart} alt="Kart" />
                <h1 className="text-3xl font-bold text-green-800">E-Kart</h1>
            </div>

            <div className='flex'>
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
            <div className="lg:flex hidden items-center relative">
                <input type="text" placeholder="Search Product" className="
                bg-slate-200 rounded-2xl h-10 outline-none p-3
                " />
                <div className="absolute right-0 p-1 flex items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            </div>


            <div className="flex items-center">
                {/* Account */}
                <div className="navbarStart lg:flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>

                    <h1 className='pl-1'>Account</h1>
                </div>

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
                <div className='lg:hidden'>
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
     );
}
 
export default Navbar;