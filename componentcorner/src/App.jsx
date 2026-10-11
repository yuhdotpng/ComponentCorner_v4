import './App.css'
import Header from './assets/components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Footer from './assets/components/Footer';
import {useEffect , useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [cart, setCart] = useState(() => {
    const savedItems = localStorage.getItem('cart');
    return savedItems ? JSON.parse(savedItems) :(
      <div className='empty-cart'> 
          <h2> Your cart is empty! </h2>
        </div>
    ) ;
  });

  useEffect(() => { 
    try { 
      localStorage.setItem("cart", JSON.stringify(cart)); } 
    catch { 
      console.warn('Could not save cart to localStorage:', error); }
    },
  [cart]);

  function addToCart(product) {
    setCart(previousCart => [...previousCart, product]);
    console.log(cart)
  };

  const removeFromCart = (indexToRemove) => { 
    console.log('Index to remove: ', indexToRemove)
    setCart(previousCart => previousCart.filter((item, index) => index !== indexToRemove)
   );
  };


  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];
  return (
  <BrowserRouter>
    <div className="app">
      <Header
      name = 'ComponentCorner'
      page1= 'Products' 
      cart_count={cart.length}
      />
      <Routes>
        <Route path= '/' element ={<HomePage />} />
        <Route path = '/products' 
          element = {<ProductPage products = {products} addToCart = {addToCart}/>} 
        />
        <Route path = '/cart'
          element = {<CartPage cart = {cart} removeFromCart = {removeFromCart} />} 
        />
      </Routes>

      <Footer
        title = 'Component Corner'
        email = 'CompCorner@example.com'
        pNum = '(266) 766-3682'
        address = '123 React Street, Component City, RC 12345'
      />
    </div>
  </BrowserRouter>
  );
}


export default App;
