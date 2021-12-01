import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom' /* me da el ambito donde voy a usar el enrutado */
import './scss/app.scss';
import Constructor from './components/itemConstructor';
import DetalleProduct from './components/DetalleProduct';


function App() {

  return (
    <BrowserRouter>
      <>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Constructor/>}/>
          <Route exact path='/:id' element={<DetalleProduct/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
