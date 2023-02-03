import Image from 'react-bootstrap/Image';

import './Login.css';
import login from '../../../assets/img/login.jpg';
import LoginForm from './LoginForm/LoginForm';


const Login = () => {
    return (
        <div className='Login'>
            <h2>¡Ingresá!</h2>
            <Image src={login} className='hero'/>
            <LoginForm/>
        </div>
    )
}

export default Login;