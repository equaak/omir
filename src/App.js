import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Auth from './pages/auth/Auth';
import OrderItems from './pages/orderItems/OrderItems';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='order'>
          <Route path='shops' element={<Order />}/>
          <Route path='products' element={<OrderItems />}/>
        </Route>
        <Route path='auth' element={<Auth />}/>
        <Route path='profile' element={<Profile />} />
        <Route path='payment' element={<></>} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
