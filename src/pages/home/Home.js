import './Home.css';
import we from './we-logo.svg';
import money from './money-hand.svg'
import protection from './protection.svg'
import quality from './quality.svg'
import right from './right-arrow.svg'
import left from './left-arrow.svg'
import partner from './Ellipse 41.svg'
import arrow from './Arrow 5.svg'
import logo from './logo.png'

const Home = () => {
    return(
        <main>
            <div className='main'>
                <div className='main-content wrapper'>
                    <p className='main-subtitle'>DENSAULYQ QAZYNASY</p>
                    <p className='main-title'>ÖMIRSAFE</p>
                </div>
            </div>
            <div className='we block'>
                <div className='we-content wrapper'>
                    <div className='we-logo'>
                        <img src={we} alt='' />
                    </div>
                    <p className='block-subtitle'>Our product</p>
                    <p className='block-title'>WHO ARE WE?</p>
                    <p className='block-text'>ÖmirSafe is building a platform for safe and convenient medication ordering. Doctors will issue electronic prescriptions sent directly to the user's app. Users can choose a pharmacy, compare prices, and order medication delivery straight to their door. </p>
                </div>
            </div>

            <div className='mission block'>
                <div className='mission-content wrapper'>
                    <p className='block-subtitle'>Our product</p>
                    <p className='block-title'>WHO ARE WE?</p>
                    <div className='mission-blocks'>
                        <div className='mission-block'>
                            <img src={money} alt='' />
                            <p className='block-text'>Make safe, convenient and affordable access to life-saving medicines. People save time by receiving the recipe directly to their profile.</p>
                        </div>
                        <div className='mission-block'>
                            <img src={protection} alt='' />
                            <p className='block-text'>We fight the unauthorized sale of medicines by offering convenient purchase of medicines at any time with home delivery</p>
                        </div>
                        <div className='mission-block'>
                            <img src={quality} alt='' />
                            <p className='block-text'>Our goal is to make healthcare more accessible, improve people's quality of life and create a reliable system for ordering and delivering medicines.</p>
                        </div>
                    </div>
                </div>

                <div className='partners block'>
                    <div className='partners-content wrapper'>
                        <p className='block-subtitle'>who helps us?</p>
                        <p className='block-title'>OUR PARTNERS</p>

                        <div className='carusel'>
                            <button className='carusel-button'><img src={left} alt=''/></button>

                            <div className='carusel-content'>
                                <img src={partner} alt=''/>
                                <img src={partner} alt=''/>
                                <img src={partner} alt=''/>
                            </div>

                            <button className='carusel-button'><img src={right} alt=''/></button>
                        </div>
                    </div>
                </div>

                <div className='our-team block'>
                    <div className='our-team-content wrapper'>
                        <img src={logo} alt='' className='logo'/>
                        <p className='block-subtitle'>WHO WORKS FOR US?</p>
                        <p className='block-title'>OUR TEAM</p>
                        <p className='block-text'>The team Integral is a passionate group of individuals dedicated to revolutionizing safe and convenient access to medication.</p>
                        <button className='team-button'>
                            <p className='button-text'>More</p>
                            <img src={arrow} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;