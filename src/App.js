import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom' /* me da el ambito donde voy a usar el enrutado */
import './scss/app.scss';
import Constructor from './components/Items/itemConstructor';
import DetalleProduct from './components/Items/DetalleProduct';
import CartProvider from './components/Cart/cartContext';
import Cart from './components/Cart/cart';
import ItemContainer from './components/Items/itemContainer';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Constructor/>}/>
            <Route exact path='categoria/:idCategoria' element={<Constructor/>}/>
            <Route exact path='detalle/:idProducto' element={<DetalleProduct/>}/>
            <Route exact path='/carrito' element={<Cart/>}/>
          </Routes>
        </>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
