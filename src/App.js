import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import './App.css'
import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';
import ProductsDetails from './component/ProductsDetails';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<ProductsDetails/>} />
          <Route path='/about' element={<About/> } />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App