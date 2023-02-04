import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {getAllDistricts} from '../../../../services/dwallet/getAllDistricts';
import { getCitiesInDistrict } from '../../../../services/dwallet/getCitiesInDistrict';
import { signin } from '../../../../services/dwallet/signin';


const SignInForm = () => {

    const [usernameErrorMessage, setUsernameErrorMessage] = useState ('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState ('');
    const [districts, setDistricts] = useState ([]);
    const [cities, setCities] = useState ([{nombre: 'Elige un departamento'}]);


    function validate () {
        setUsernameErrorMessage ('Reacciono');
        setPasswordErrorMessage ('Error en la contraseña');
    }

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
            username : event.target.username.value,
            password: event.target.password.value,
            confirm: event.target.confirm.value,
            district: event.target.district.value,
            city: event.target.city.value
        }
        signin (payload).then ((user) => {
            return console.log (user);
        })
    }

    useEffect (() => {
        getDistricts ();
    })

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-12">
                <Form.Label htmlFor='username'>Usuario</Form.Label>
                <Form.Control name='username' type="text" placeholder="Ingresá tu usuario" />
                <Form.Text className="text-danger">
                    {usernameErrorMessage}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='password'>Contraseña</Form.Label>
                <Form.Control name='password' type="password" placeholder="Ingresá tu contraseña" />
                <Form.Text className="text-danger">
                    {passwordErrorMessage}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='confirm'>Confirmar contraseña</Form.Label>
                <Form.Control name='confirm' type="password" placeholder="Repetí tu contraseña" />
                <Form.Text className="text-danger">
                    {passwordErrorMessage}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='district'>Departamento</Form.Label>
                <Form.Select name='district' onChange={handleDistrictChange}>
                    {districts.map ((district) => {
                        return <option value={district.id}>{district.nombre}</option>
                    })}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='city'>Ciudad</Form.Label>
                <Form.Select name='city'>
                    {cities.map ((city) => {
                        return <option value={city.id}>{city.nombre}</option>
                    })}
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={validate}>
                Registrate
            </Button>
        </Form>
    );
}

export default SignInForm;