import { Form } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";
import getCategories from '../../../../services/dwallet/getCategories';
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../../../services/dwallet/postTransaction";
import './TransactionForm.css';
import { notifySuccess } from "../../../../app/toasts";
import { addNewTransaction } from "../../../../app/transactions";
import { setCategories } from "../../../../app/categories";

const TransactionForm = ({handleClose}) => {
    const concept = useRef();
    const category = useRef();
    const amount = useRef();
    const payMethod = useRef();
    const date = useRef();
    const loggedInUser = useSelector(state => state.session.value);
    // const[categories, setCategories] = useState([]);
    const dispatch = useDispatch ();
    const [btnDisabled, setBtnDisabled] = useState(true)
    useEffect(() => {
        getCategories(loggedInUser)
        .then(data => {
            dispatch(setCategories(data.rubros))
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const validateForm = () => {
        const _concept = concept.current.value
        const _category = category.current.value
        const _amount = amount.current.value
        const _payMethod = payMethod.current.value
        const _date = date.current.value

        if(_concept !== '' && _category !== '' && _amount !== '' && _payMethod !== '' && _date !== ''){
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }    

    const categories = useSelector(state => state.categories.value)
    console.log(categories);
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
                console.log(payload)
                dispatch(addNewTransaction(payload));
                dispatch(notifySuccess());

        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-12">
                <Form.Label>Concepto:</Form.Label>
                <Form.Control type="text" placeholder="Concepto..." ref={concept} onChange={validateForm}/>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-12">
                <Form.Label>Categoría:</Form.Label>
                <Form.Select ref={category} defaultValue="" onChange={validateForm}>
                    <option value="" disabled>Seleccione una categoría...</option>
                    {categories.map((category) => {
                        return <option value={category.id} key={category.id}>{category.tipo} - {category.nombre}</option>
                    })}
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Importe:</Form.Label>
                <Form.Control type="number" placeholder="Importe en $U..." ref={amount} onChange={validateForm}/>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Medio de Pago: </Form.Label>
                    <Form.Select ref={payMethod} defaultValue="" onChange={validateForm}>
                        <option value="" disabled>Seleccione un medio...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Credito">Crédito</option>
                        <option value="Debito">Débito</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                    </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control type="date" placeholder="Concepto..." ref={date} onChange={validateForm}/>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
            <button className="form-button button indigo" type="submit" disabled={btnDisabled}>
                Agregar
            </button>
        </Form>

    )
}

export default TransactionForm;