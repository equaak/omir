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
                        <Link to='partners'>Partners</Link>
                        <Link to='out_team'>Our team</Link>
                        <Link to='contact'>Contacts</Link>
                        <Link to='order/shops'><button className='header-button'>Order</button></Link>
                    </nav>
                </div>
            </header>

            <Outlet />
        </main>
    )
}

export default Layout;