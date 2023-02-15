import { Form, Button, Modal } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";
import getCategories from "../../../../services/dwallet/getCategories";
import { useSelector } from "react-redux";
import { addTransaction } from "../../../../services/dwallet/postTransaction";

const AddTransactionForm = (show) => {
    const concept = useRef();
    const category = useRef();
    const amount = useRef();
    const payMethod = useRef();
    const date = useRef();
    const loggedInUser = useSelector(state => state.session.value);
    const[categories, setCategories] = useState([]);

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
            console.log(payload)
            if(tr.status !==200) 
            console.log(tr);
            

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
                <Form.Select ref={category}>
                    <option selected disabled>Elige una categoría...</option>
                    {categories.map((category) => {
                        return <option value={category.id}>{category.tipo} - {category.nombre}</option>
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
                    <Form.Select ref={payMethod}>
                        <option selected disabled>Elige un método de pago...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Credito">Crédito</option>
                        <option value="Debito">Débito</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                    </Form.Text>

                {/* <Form.Control type="text" placeholder="Indique el medio de pago..." ref={payMethod} />
                <Form.Text className="text-danger">
                </Form.Text> */}
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control type="date" placeholder="Concepto..." ref={date} />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
            <Modal.Footer>
                        <Button variant="secondary" >
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Agregar
                        </Button>
            </Modal.Footer>
        </Form>

    )
}

export default AddTransactionForm;