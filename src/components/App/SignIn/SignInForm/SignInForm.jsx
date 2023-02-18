import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import {getAllDistricts} from '../../../../services/dwallet/getAllDistricts';
import { getCitiesInDistrict } from '../../../../services/dwallet/getCitiesInDistrict';
import { signin } from '../../../../services/dwallet/signin';
import { setLoggedInUser } from '../../../../app/session';
import { Link } from 'react-router-dom';
import { areEqual, hasWhiteSpace, isEmpty } from '../../../../utils/utils';


const SignInForm = () => {
    const username = useRef ('');
    const password = useRef ('');
    const confirm = useRef ('');
    const district = useRef ('');
    const city = useRef ('');
    const dispatch = useDispatch ();
    const [districts, setDistricts] = useState ([]);
    const [validationErrors, setValidationErrors] = useState({});
    const [forbidSignUp, setForbidSignUp] = useState (true)
    const [cities, setCities] = useState ([{nombre: 'Elige un departamento'}]);

    function getDistricts () {
        getAllDistricts().then ((payload) => {
            setDistricts (payload.departamentos);
        })
    }

    function handleDistrictChange (event) {
        getCitiesInDistrict (event.target.value).then ((payload) => {
            setCities (payload.ciudades);
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        const payload = {
            usuario : username.current.value,
            password: password.current.value,
            idDepartamento: district.current.value,
            idCiudad: city.current.value
        }
        signin (payload).then ((user) => {
            dispatch (setLoggedInUser(user))
        })
    }

    function runSignUpValidations () {
        let errors = {};
        if (!areEqual(password.current.value, confirm.current.value)) {
            errors['confirmationError'] = 'Las contraseñas no coinciden';
        }
        if (isEmpty (username.current.value)) {
            errors['usernameEmptyError'] = 'El usuario no puede quedar vacío';
        }
        if (isEmpty(password.current.value)) {
            errors['passwordEmptyError'] = 'La contraseña no puede quedar vacía';
        }
        if (hasWhiteSpace(username.current.value)) {
            errors['usernameContainsWhiteSpace'] = 'El usuario no debe contener espacios vacíos';
        }
        if (hasWhiteSpace (password.current.value)) {
            errors['passwordContainsWhiteSpace'] = 'La contraseña no debe contener espacios vacíos';
        }
        if (isNaN (parseInt(district.current.value))) {
            errors['districtError'] = 'Debes elegir un departamento'
        }
        if (isNaN (parseInt(city.current.value))) {
            errors['cityError'] = 'Debes elegir una ciudad';
        }
        let ok = Object.values(errors).reduce ((current, value) => current && isEmpty(value), true);
        setValidationErrors (errors);
        setForbidSignUp (!ok);
    }

    useEffect (() => {
        runSignUpValidations();
        getDistricts ();
    }, [])

    return (
        <Form onSubmit={handleSubmit} onChange={runSignUpValidations}>
            <Form.Group className="mb-12">
                <Form.Label htmlFor='username'>Usuario</Form.Label>
                <Form.Control ref={username} name='username' type="text" placeholder="Ingresá tu usuario" />
                <Form.Text className="text-danger">
                    {validationErrors['usernameEmptyError']}
                </Form.Text>
                <Form.Text className="text-danger">
                    {validationErrors['usernameContainsWhiteSpace']}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='password'>Contraseña</Form.Label>
                <Form.Control ref={password} name='password' type="password" placeholder="Ingresá tu contraseña" />
                <Form.Text className="text-danger">
                    {validationErrors['passwordEmptyError']}
                </Form.Text>
                <Form.Text className="text-danger">
                    {validationErrors['passwordContainsWhiteSpace']}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='confirm'>Confirmar contraseña</Form.Label>
                <Form.Control ref={confirm} name='confirm' type="password" placeholder="Repetí tu contraseña" />
                <Form.Text className="text-danger">
                    {validationErrors['confirmationError']}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='district'>Departamento</Form.Label>
                <Form.Select ref={district} name='district' onChange={handleDistrictChange}>
                <option selected disabled>Elige un departamento</option>
                    {districts.map ((district) => {
                        return <option value={district.id}>{district.nombre}</option>
                    })}
                </Form.Select>
                <Form.Text className="text-danger">
                    {validationErrors['districtError']}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='city'>Ciudad</Form.Label>
                <Form.Select ref={city} name='city'>
                    {cities.map ((city) => {
                        return <option value={city.id}>{city.nombre}</option>
                    })}
                </Form.Select>
                <Form.Text className="text-danger">
                    {validationErrors['cityError']}
                </Form.Text>
            </Form.Group>

            <input className='button indigo' type="submit" value='Registrame' disabled={forbidSignUp} />

            <div className='text-center'>
                <Link to='/'>Quiero ingresar</Link>
            </div>
        </Form>
    );
}

export default SignInForm;