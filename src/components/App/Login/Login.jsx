const Login = () => {
    return (
        <div>
            <h2>Hola, soy el login</h2>
            <br />
            <label htmlFor="username"></label>
            <input type="text" placeholder="Ingrese su nombre de usuario"/>
            <br />
            <label htmlFor="password"></label>
            <input type="text" placeholder="Ingrese su contraseña"/>
            <br />
            <input type="submit" value="¡Ingresar!" />
        </div>
    )
}

export default Login;