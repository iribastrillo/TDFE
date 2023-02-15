import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {getAllDistricts} from '../../../../services/dwallet/getAllDistricts';
import { getCitiesInDistrict } from '../../../../services/dwallet/getCitiesInDistrict';
import { signin } from '../../../../services/dwallet/signin';
import { setLoggedInUser } from '../../../../app/session';
import { Link } from 'react-router-dom';


const SignInForm = () => {
    const username = useRef ('');
    const password = useRef ('');
    const confirm = useRef ('');
    const district = useRef ('');
    const city = useRef ('');
    const dispatch = useDispatch ();
    const [districts, setDistricts] = useState ([]);
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

    useEffect (() => {
        getDistricts ();
    }, [])

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-12">
                <Form.Label htmlFor='username'>Usuario</Form.Label>
                <Form.Control ref={username} name='username' type="text" placeholder="Ingresá tu usuario" />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='password'>Contraseña</Form.Label>
                <Form.Control ref={password} name='password' type="password" placeholder="Ingresá tu contraseña" />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='confirm'>Confirmar contraseña</Form.Label>
                <Form.Control ref={confirm} name='confirm' type="password" placeholder="Repetí tu contraseña" />
                <Form.Text className="text-danger">
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
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='city'>Ciudad</Form.Label>
                <Form.Select ref={city} name='city'>
                    {cities.map ((city) => {
                        return <option value={city.id}>{city.nombre}</option>
                    })}
                </Form.Select>
            </Form.Group>

            <input className='button indigo' type="submit" value='Registrame'/>

            <div className='text-center'>
                <Link to='/'>Quiero ingresar</Link>
            </div>
        </Form>
    );
}

export default SignInForm;