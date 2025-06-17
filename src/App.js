import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import About from './Components/About';
import Signup from "./Components/Signup";
import ProtectedRoutes from './Components/Protectedroutes';
import OrderGuard from './Components/Orderguard';
import Makepayments from "./Components/Makepayments";
import Footer from "./Components/Footer";
import Notfound from "./Components/Notfound";
import Cart from "./Components/Cart";
import Addproducts from "./Components/Addproduct";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/*" element={<Notfound/>} />
        <Route path="/addproduct" element={<Addproducts/>} /> 

        {/* Protected Routes (must be logged in) */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
          
          {/* Order requires login + Home visit */}
          <Route element={<OrderGuard />}>
            <Route path="/makepayments" element={<Makepayments />} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
     
    </Router>
  );
}

export default App;
