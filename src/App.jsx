
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Gym from './pages/Category Pages/Gym';
import Books from './pages/Category Pages/Books';
import Furniture from './pages/Category Pages/Furniture';
import Electronics from './pages/Category Pages/Electronics';
import ItemList from './pages/ItemList';
import CartContextProvider from './context/cart-display-context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='Gym' element={<Gym />} />
      <Route path='Books' element={<Books />} />
      <Route path='Furniture' element={<Furniture />} />
      <Route path='Electronics' element={<Electronics />} />
      <Route path=':id' element={<ItemList />} />
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
