import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/cart-display-context';

const RootLayout = () => {
    const { showCart, setShowCart } = useContext(CartContext);
    
    return ( 
        <div>
            <div className={`${showCart ? "opacity-25" : null }`}>
                <header>
                    <nav>
                        <Navbar/>
                    </nav>
                </header>
                <div onClick={() => setShowCart(false)}>
                    <main>
                        <Outlet />
                    </main>

                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
{showCart && 
            <aside>
                <div className="flex justify-end">
                    <Cart />
                </div>
            </aside>
}
      </div>
     );
}
 
export default RootLayout;