import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/cart-display-context';
import ScrollToTop from '../components/ScrollToTop';
import Breadcrumbs from '../components/Breadcrumbs';

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
                        <Breadcrumbs />
                            <Outlet />
                        </main>

                        <footer>
                            <Footer />
                        </footer>
                    </div>
                </div>
    {showCart && 
                <aside className='flex justify-end'>
                    <Cart />
                </aside>
    }
        </div>
      </ScrollToTop>
     );
}
 
export default RootLayout;