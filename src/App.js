import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom' /* me da el ambito donde voy a usar el enrutado */
import './scss/app.scss';
import Constructor from './components/itemConstructor';
import DetalleProduct from './components/DetalleProduct';
import CartProvider from './components/cartContext';
import Cart from './components/cart';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Constructor/>}/>
            <Route exact path='/abrigos' element={<Constructor/>}/>
            <Route exact path='/pantalones' element={<Constructor/>}/>
            <Route exact path='/remeras' element={<Constructor/>}/>
            <Route exact path='/accesorios' element={<Constructor/>}/>
            <Route exact path='/:id' element={<DetalleProduct/>}/>
            <Route exact path='/:idCategoria' element={<DetalleProduct/>}/>
            <Route exact path='/carrito' element={<Cart/>}/>
          </Routes>
        </>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
