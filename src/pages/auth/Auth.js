import './Auth.css';
import img from './Group 206.svg'

const Auth = () => {
    return(
        <main className='wrapper'>
            <div className='auth-content'>
                <img src={img} alt='' />
                <p className='auth-title'>Login page</p>
                <input placeholder='Your e-mail'></input>
                <input placeholder='Password'></input>
                <button className='auth-button'>Login</button>
            </div>
        </main>
    )
}

export default Auth;