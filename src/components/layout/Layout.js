import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return(
        <main>
            <header>
                <div className='wrapper header'>
                    <Link to=''><p className='header-title'>ÖmirSafe</p></Link>
                    
                    <nav>
                        <Link to=''>Home</Link>
                        <Link to='about'>About</Link>
                        <Link to='profile'>Profile</Link>
                        <Link to='order/shops'><button className='header-button'>Order</button></Link>
                    </nav>  
                </div>
            </header>

            <Outlet />
        </main>
    )
}

export default Layout;