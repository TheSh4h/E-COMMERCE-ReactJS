import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/cart-display-context';

const RootLayout = () => {
    const { showCart } = useContext(CartContext);
    
    return ( 
        <div>
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

{showCart && 
            <aside>
                <div className="flex justify-end">
                    <Cart />
                </div>
            </aside>
}
            <footer>
                <Footer />
            </footer> 
      </div>
     );
}
 
export default RootLayout;