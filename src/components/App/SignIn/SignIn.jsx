import Image from 'react-bootstrap/Image';

import './SignIn.css';
import signin from '../../../assets/img/signin.jpg';
import SignInForm from './SignInForm/SignInForm';

const SignIn = () => {
    return (
        <div className='SignIn'>
            <h1>¡Registrate!</h1>
            <Image src={signin} className='hero'/>
            <SignInForm/>
        </div>
    )
}

export default SignIn;