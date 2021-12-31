import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom' /* me da el ambito donde voy a usar el enrutado */
import './scss/app.scss';
import Constructor from './components/Items/itemConstructor';
import DetalleProduct from './components/Items/DetalleProduct';
import CartProvider from './components/Cart/cartContext';
import CartContainer from './components/Cart/cartContainer';
import ItemContainer from './components/Items/itemContainer';
import Contacto from './components/Contacto/Contacto';
import { useState } from 'react/cjs/react.development';

function App() {
  const [cartItems,setCartItems] = useState([])
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if (exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1 }: x))
    }else{
      setCartItems([...cartItems, {...product,qty:1}])
    }
  }
  return (
    <CartProvider>
      <BrowserRouter>
        <>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Constructor/>}/>
            <Route exact path='/categoria/:idCategoria' element={<ItemContainer onAdd={onAdd}/>}/>
            <Route exact path='/detalle/:idProducto' element={<DetalleProduct onAdd={onAdd}/>}/>
            <Route exact path='/carrito' element={<CartContainer/>}/>
            <Route exact path='/contacto' element={<Contacto/>}/>
          </Routes>
        </>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
