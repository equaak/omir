import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Auth from './pages/auth/Auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='order'>
          <Route path='shops' element={<Order target = "shops" />}/>
          <Route path='products' element={<Order target='products' />}/>
        </Route>
        <Route path='auth' element={<Auth />}/>
      </Route>
    </Routes>
  );
}

export default App;
