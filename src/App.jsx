import Navbar from './Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import ProductList from './ProductList';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Gallery/>
        <ProductList/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
