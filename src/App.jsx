
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='account' element={<Account />} />
      <Route path='Gym' element={<Gym />} />
      <Route path='Books' element={<Books />} />
      <Route path="Men's Outfit" element={<Outfit />} />
      <Route path='Electronics' element={<Electronics />} />
      <Route path="Men's Outfit/:id" element={<ItemList type="outfits" />} />
      <Route path="Books/:id" element={<ItemList type="books" />} />
      <Route path="Gym/:id" element={<ItemList type="gym" />} />
      <Route path="Electronics/:id" element={<ItemList type="electronics" />} />
      <Route path=':id' element={<ItemList type="products" />} />
      <Route path='search' element={<SearchPage />} />
    </Route>
  )
)

function App() {
  return (
    <CartContextProvider>
        <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
