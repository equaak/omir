import './OrderItems.css';
import { Link } from 'react-router-dom';
import basket from '../order/basket.svg';
import point from '../order/point.svg';
import searchImg from '../order/search.svg'
import arrow from '../order/arrow.svg'
import userStore from '../../store/userStore/UserStore';
import shopStore from '../../store/shopStore/ShopStore';
import { useState, useEffect } from 'react';
import axios from 'axios';
import star from '../order/star.svg';
import abyl from './abyl.png'
import sale from './sale.svg'
import bas from './bas.svg'
import fire from './fire.svg'
import product_logo from './product_logo.png';

const OrderItems = () => {
    const [content, setContent] = useState([])
    const [filteredItems, setFilteredItems] = useState([[]])
    const [search, setSearch] = useState('')
    const [searchCategories, setSearchCategories] = useState('')
    const setProducts = async () => {
        console.log(shopStore.shop)
        const responce = await axios.get(`http://localhost:5000/medication`)
        const rows = responce.data.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
        setContent(responce.data)
        setFilteredItems([])
        setFilteredItems(rows)
    }

    useEffect(() => {
        setProducts()
    }, [])

    useEffect(() => {
        handleFilter();
    }, [search])

    useEffect(() => {
        console.log(filteredItems)
    }, [filteredItems])

    const handleItem = (item) => {
        
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleFilter = () => {
        if(search !== ''){
            const filtered = content.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
            const rows = filtered.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
            setFilteredItems(rows)
        }
        else{
            const rows = content.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
            setFilteredItems(rows)
        }
    }

    return(
        <main>
            <header className='order-header'>
                <div className='wrapper order-content'>
                    <div className='nav'>
                        <img src={point} alt='' />
                        <p className='address-text'>Turan, 11</p>
                    </div>

                    <div className='search'>
                        <img src={searchImg} alt='' />
                        <input type='text' placeholder='Search in ÖmirSafe... ' value={search} onChange={handleSearch}/>
                    </div>

                    <div className='nav'>
                        <Link to='/auth'><button className='login-button'>Login</button></Link>
                        <Link to='/auth'><button className='signup-button'>Sign Up</button></Link>

                        <div className='basket'>
                            <img src={basket} alt='' />
                            <p className='basket-text'>{}</p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className='wrapper'>
                    {/* {target === 'shops' ? <p className='order-title'>Medicine deliveries</p> : ''} */}
                    <p className='order-title'>{shopStore.shop.name}</p>
                    <div className='shop-info'>
                        <img src={abyl} alt='' />
                        <p className='pharmacy-price'>KZT 0</p>
                        <img src={sale} alt='' />
                        <p className='pharmacy-text purple'>Welcome gift: free delivery </p>
                        <img src={bas} alt='' />
                        <p className='pharmacy-text'>Order from 5 000 KZT </p>
                        <img src={star} alt='' />
                        <p className='pharmacy-text'>Welcome gift: free delivery </p>
                    </div>
                    <p className='shop-description'>{shopStore.shop.description}</p>
                    <div className='tree'>
                        <Link to='/'><p className='tree-home'>Homepage</p></Link>
                        <img src={arrow} alt='' />
                        <Link to='/order/shops'><p className='shop tree-home'>All pharmacies</p></Link>
                        <img src={arrow} alt='' />
                        <p className='shop tree-home underline'>{shopStore.shop.name}</p>
                    </div>

                    <div className='pharmacy-popular'>
                        <img src={fire} alt='' />
                        <p className='popular-title'>Popular</p>
                    </div>
                    <p className='popular-subtitle'>Most ordered in the last 30 days at ÖmirSafe</p>
                    <div className='popular-products'>
                        {content.map((item, i) => {
                            if(i < 3){
                                return(
                                    <div className='popular-product'>
                                        <div className='popular-left'>
                                            <p className='popular-name'>{item.name}</p>
                                            <p className='popular-price'>{item.price} KZT</p>
                                        </div>
                                        <div className='popular-right'>
                                            <img src={product_logo} alt='' />
                                            <button className='popular-button' onClick={() => handleItem(item)}>+</button>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className='products-content'>
                        <div className='product-categories'>
                            <div className='search'>
                                <img src={searchImg} alt='' />
                                <input type='text' placeholder='Search in categories... ' value={searchCategories} onChange={handleSearch}/>
                            </div>
                            <div className='categories-content'>

                            </div>
                        </div>
                        <div className='products-block'>
                            
                        </div>
                    </div>
                </div>  
            </main>
        </main>
    )
}

export default OrderItems;