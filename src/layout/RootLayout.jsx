import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/cart-display-context';
import ScrollToTop from '../ScrollToTop';
import Breadcrumbs from '../Breadcrumbs';

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