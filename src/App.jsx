
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Gym from './pages/Category Pages/Gym';
import Books from './pages/Category Pages/Books';
import Outfit from './pages/Category Pages/Outfit';
import Electronics from './pages/Category Pages/Electronics';
import ItemList from './pages/ItemList';
import CartContextProvider from './context/cart-display-context';
import Account from './pages/Account';
import SearchPage from './SearchPage';
import SearchContextProvider from './context/search-context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='account' element={<Account />} />
      <Route path='gym' element={<Gym />} />
      <Route path='books' element={<Books />} />
      <Route path="Men's Outfit" element={<Outfit />} />
      <Route path='electronics' element={<Electronics />} />
      <Route path="Men's Outfit/:id" element={<ItemList type="outfits" />} />
      <Route path="books/:id" element={<ItemList type="books" />} />
      <Route path="gym/:id" element={<ItemList type="gym" />} />
      <Route path="electronics/:id" element={<ItemList type="electronics" />} />
      <Route path=':id' element={<ItemList type="products" />} />
      <Route path='search' element={<SearchPage />} />
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
