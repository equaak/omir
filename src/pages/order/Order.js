import './Order.css';
import { Link, useNavigate } from 'react-router-dom';
import basket from './basket.svg';
import point from './point.svg';
import searchImg from './search.svg'
import arrow from './arrow.svg'
import userStore from '../../store/userStore/UserStore';
import shopStore from '../../store/shopStore/ShopStore';
import { useState, useEffect } from 'react';
import axios from 'axios';
import pharm_logo from './pharm_logo.png';
import star from './star.svg';

const Order = () => {
    const [content, setContent] = useState([])
    const [filteredResults, setFilteredResults] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const setShops = async () => {
        const responce = await axios.get('http://localhost:5000/pharamacies');
        const rows = responce.data[0].reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
        setContent(responce.data[0])
        setFilteredResults(rows)
    }

    useEffect(() => {
        setShops();
    }, [])

    useEffect(() => {
        console.log(content)
    }, [content])

    const handleFilter = () => {
        if(search !== ''){
            const filtered = content.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
            const rows = filtered.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
            setFilteredResults(rows)
        }
        else{
            const rows = content.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
            setFilteredResults(rows)
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        handleFilter()
    }, [search])

    const handleShop = (shop) => {
        shopStore.setShop(shop)
        navigate('/order/products')
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
                    <p className='order-title'>Medicine deliveries</p>
                    <div className='tree'>
                        <Link to='/'><p className='tree-home'>Homepage</p></Link>
                        <img src={arrow} alt='' />
                        <p className='order-label'>All pharamacies</p>
                    </div>

                    <p className='order-subtitle'>All pharmacies</p>

                    <div className='shops-block'>
                        {filteredResults.map((item, i) => {
                            return(
                                <div className='shops-row'>
                                    {
                                        item.map((subItem) => {
                                            return(
                                            <div className='shop-block' onClick={() => handleShop(subItem)}>
                                                <div className='shop-up'>
                                                    <img src={pharm_logo} alt='' />
                                                    <p className='shop-title'>{subItem.name}</p>
                                                    <div className='shop-desc'>
                                                        <p className='shopDesc-text'>Europharma is a modern convenient drug store where you can buy certified medicines...</p>
                                                        <div className='delivery-time'>
                                                            <p className='time'>60-70 <br></br> min</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='divider'></div>
                                                <div className='shop-up'>
                                                    <div className='pharmacy-rating'>
                                                        {/* <img src='' alt=''></img> */}
                                                        <p className='pharmacy-price'>KZT 0</p>
                                                        <div className='pharmacy-stars'>
                                                            <img src={star} alt='' />
                                                            <p className='star-text'>4.97/5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        })
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>  
            </main>
        </main>
    )
}

export default Order;