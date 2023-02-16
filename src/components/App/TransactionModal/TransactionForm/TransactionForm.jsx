import { Form } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";
import getCategories from '../../../../services/dwallet/getCategories';
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../../../services/dwallet/postTransaction";
import './TransactionForm.css';
import { notifySuccess } from "../../../../app/toasts";

const TransactionForm = ({handleClose}) => {
    const concept = useRef();
    const category = useRef();
    const amount = useRef();
    const payMethod = useRef();
    const date = useRef();
    const loggedInUser = useSelector(state => state.session.value);
    const[categories, setCategories] = useState([]);
    const dispatch = useDispatch ();

    useEffect(() => {
        getCategories(loggedInUser)
        .then(data => {
            setCategories(data.rubros);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleSubmit = event => {
        event.preventDefault();
        const payload = {
            idUsuario: loggedInUser.id,
            concepto: concept.current.value,
            categoria: parseInt(category.current.value),
            total: parseInt(amount.current.value),
            medio: payMethod.current.value,
            fecha: date.current.value,
            apiKey: loggedInUser.apiKey,
        }

        addTransaction(payload).then(tr =>{
            if(tr.status !==200) 
                handleClose();
                dispatch(notifySuccess());

        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-12">
                <Form.Label>Concepto:</Form.Label>
                <Form.Control type="text" placeholder="Concepto..." ref={concept}/>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-12">
                <Form.Label>Categoría:</Form.Label>
                <Form.Select ref={category} defaultValue='Elige una categoría'>
                    {categories.map((category) => {
                        return <option value={category.id} key={category.id}>{category.tipo} - {category.nombre}</option>
                    })}
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Importe:</Form.Label>
                <Form.Control type="number" placeholder="Importe en $U..." ref={amount}/>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Medio de Pago: </Form.Label>
                    <Form.Select ref={payMethod} defaultValue='Efectivo'>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Credito">Crédito</option>
                        <option value="Debito">Débito</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                    </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control type="date" placeholder="Concepto..." ref={date} />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
            <button className="form-button button indigo" type="submit">
                Agregar
            </button>
        </Form>

    )
}

export default TransactionForm;