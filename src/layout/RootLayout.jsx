import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/cart-display-context';
import ScrollToTop from '../ScrollToTop';

const RootLayout = () => {
    const { showCart, setShowCart } = useContext(CartContext);
    
    return (
        <ScrollToTop> 
            <div>
                <div className={`${showCart ? "opacity-25" : null }`}>
                    <header>
                        <nav>
                            <Navbar/>
                        </nav>
                    </header>
                    <div onClick={() => setShowCart(false)}>
                        <main className="mt-20">
                            <Outlet />
                        </main>

                        <footer>
                            <Footer />
                        </footer>
                    </div>
                </div>
    {showCart && 
                <aside>
                    <Cart />
                </aside>
    }
        </div>
      </ScrollToTop>
     );
}
 
export default RootLayout;