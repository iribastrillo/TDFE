import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {getAllDistricts} from '../../../../services/dwallet/getAllDistricts';
import { getCitiesInDistrict } from '../../../../services/dwallet/getCitiesInDistrict';


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

    useEffect (() => {
        getDistricts ();
    })

    return (
        <Form>
        <Form.Group className="mb-12" controlId="username">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu usuario" />
            <Form.Text className="text-danger">
                {usernameErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresá tu contraseña" />
            <Form.Text className="text-danger">
                {passwordErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirm">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control type="password" placeholder="Repetí tu contraseña" />
            <Form.Text className="text-danger">
                {passwordErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId='district'>
            <Form.Label>Departamento</Form.Label>
            <Form.Select onChange={handleDistrictChange}>
                {districts.map ((district) => {
                    return <option value={district.id}>{district.nombre}</option>
                })}
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId='city'>
            <Form.Label>Ciudad</Form.Label>
            <Form.Select>
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