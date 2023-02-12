import { Form } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";
import getCategories from "../../../../services/dwallet/getCategories";
import { useSelector } from "react-redux";

const AddTransactionForm = () => {
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
    })
    


    return(
        <Form>
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
                <Form.Control type="text" placeholder="Indique el medio de pago..." ref={payMethod} />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-12">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control type="date" placeholder="Concepto..." ref={date} />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form.Group>
        </Form>

    )
}

export default AddTransactionForm;