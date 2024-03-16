import './Order.css';
import { Link } from 'react-router-dom';
import basket from './basket.svg';
import point from './point.svg';
import search from './search.svg'
import arrow from './arrow.svg'
// import axios from 'axios';

const Order = ({target}) => {
    // const [content, setContent] = useState()

    // useEffect(() => {
    //     if(target === 'shops'){
    //         const responce = axios.get('http://localhost:5000/pharamacies');

    //         console.log(responce.data)
    //     }
    // }, [])

    return(
        <main>
            <header className='order-header'>
                <div className='wrapper order-content'>
                    <div className='nav'>
                        <img src={point} alt='' />
                        <p className='address-text'>Turan, 11</p>
                    </div>

                    <div className='search'>
                        <img src={search} alt='' />
                        <input type='text' placeholder='Search in ÖmirSafe... ' />
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
                        {target === 'shops' ? <p className='order-label'>All pharamacies</p> : <p></p>}
                    </div>

                    <p className='order-subtitle'>All pharmacies</p>
                </div>  
            </main>
        </main>
    )
}

export default Order;