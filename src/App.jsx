
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Gym from './pages/Category Pages/Gym';
import Books from './pages/Category Pages/Books';
import Outfit from './pages/Category Pages/Outfit';
import Electronics from './pages/Category Pages/Electronics';
import ItemPage from './pages/ItemPage';
import CartContextProvider from './context/cart-display-context';
import Account from './pages/Account';
import SearchPage from './components/SearchPage';
import SearchContextProvider from './context/search-context';
import Deals from './pages/Deals';
import New from './pages/New';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='account' element={<Account />} />
      <Route path='Gym' element={<Gym />} />
      <Route path='Books' element={<Books />} />
      <Route path="Men's Outfit" element={<Outfit />} />
      <Route path='Electronics' element={<Electronics />} />
      <Route path="Men's Outfit/:id" element={<ItemPage type="outfits" />} />
      <Route path="Books/:id" element={<ItemPage type="books" />} />
      <Route path="Gym/:id" element={<ItemPage type="gym" />} />
      <Route path="Electronics/:id" element={<ItemPage type="electronics" />} />
      <Route path=':id' element={<ItemPage type="products" />} />
      <Route path='search' element={<SearchPage />} />
      <Route path='Deals' element={<Deals />} />
      <Route path="What's New" element={<New />} />
    </Route>
  )
)

function App() {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>    
    </CartContextProvider>
  );
}

export default App;
