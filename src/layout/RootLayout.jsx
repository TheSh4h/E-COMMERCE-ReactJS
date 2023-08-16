import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';

const RootLayout = () => {
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

            <aside>
                <div className="flex justify-end">
                    <Cart />
                </div>
            </aside>

            <footer>
                <Footer />
            </footer> 
      </div>
     );
}
 
export default RootLayout;