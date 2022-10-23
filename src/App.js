import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
//import WithSubnavigation from './Components/WithSubnavigation';
import Footer from './Components/Footer';

function App() {
  return (
    <Provider store={store} >
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
    </Provider>
  );
}

export default App;
