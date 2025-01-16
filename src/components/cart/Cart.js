import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import cart from './cart.svg';
import userStore from '../../store/userStore/UserStore';
import './Cart.css';
import { useEffect, useState } from 'react';

const Cart = observer(() => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const responce = await axios.get(`http://localhost:5000/cart?user_id=${userStore.user.id}`)
        console.log(responce.data)
    }
    useEffect(() => {
        if(userStore.token === ""){
            navigate('/auth');
        }
        else{
            getItems();
        }
        setTimeout(() => {
            setIsActive(true);
        }, 100);
    }, [])



    return(
        <div className={`cart-container ${isActive ? 'active' : ''}`}>
            <div>
                <img src={cart} />
                <p className='cart-title'>Your order</p>
                <p className='cart-subtitle'>Your items</p>    
            </div>
            <div className='cart-pricing'>
                <div className='cart-price'>
                    <p>Total</p>
                    <p>KZT</p>
                </div>
                <button className='cart-button'>Go to checkout</button>
            </div>        
        </div>
    )    
});

export default Cart;