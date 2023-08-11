import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

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

            <footer>
                <Footer />
            </footer> 
      </div>
     );
}
 
export default RootLayout;