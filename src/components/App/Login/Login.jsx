import Image from 'react-bootstrap/Image';

import './Login.css';
import login from '../../../assets/img/login.jpg';
import LoginForm from './LoginForm/LoginForm';


const Login = () => {
    return (
        <div className='Login'>
            <h1>¡Ingresá!</h1>
            <Image src={login} className='hero'/>
            <LoginForm/>
        </div>
    )
}

export default Login;