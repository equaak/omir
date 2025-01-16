import { observer } from 'mobx-react-lite';
import axios from 'axios';

import userStore from '../../store/userStore/UserStore';
import picture_logo from './product_logo.png';
import './Item.css';
import { useState,useEffect } from 'react';

const Item = observer(({item}) => {
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 100);
    }, [])

    const handleIncrease = () => {
        if(count + 1 <= item.quantity){
            setCount(count + 1);
        }
    }

    const handleDecrease = () => {
        if(count - 1 >= 1){
            setCount(count - 1);
        }
    }

    const handleAddCart = async () => {
        const responce = await axios.post('http://localhost:5000/cart', {customer_id: userStore.user.id, medication_id: item.id, quantity: count})
        
        console.log(responce.data)
    }

    return(
        <div className={`item-container ${isActive ? 'active' : ''}`}>
            <img src={picture_logo} />
            <p className='item-title'>{item.name}</p>
            <p className='item-price'>{item.price} ₸</p>

            <div className='item-characterstics'>
                <div className='item-characterstic'>
                    <p className='characterstic-title'>Availibility</p>
                    <p className='characterstic'>{item.quantity > 0 ? 'Available' : 'Not available'}</p>
                </div>
                <div className='item-characterstic'>
                    <p className='characterstic-title'>Vendor code</p>
                    <p className='characterstic'>{item.article_number}</p>
                </div>
                <div className='item-characterstic'>
                    <p className='characterstic-title'>Country</p>
                    <p className='characterstic'>{item.country}</p>
                </div>
                <div className='item-characterstic'>
                    <p className='characterstic-title'>Manufacturer</p>
                    <p className='characterstic'>{item.manufacturer}</p>
                </div>
            </div>

            <div className='item-controller'>
                <div className='item-buttons'>
                    <button onClick={handleDecrease}>-</button>
                    <div className='item-count'>
                        <p className='count-label'>{count}</p>
                    </div>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
            <button onClick={handleAddCart} className='item-button'>Add to cart</button>
        </div>
    )
});

export default Item;