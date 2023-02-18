import { Form } from "react-bootstrap"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import setFilteredTransactions from '../../../../app/transactions'
import { useEffect } from "react"
import getTransactions from "../../../../services/dwallet/getTransactions"
import { setTransactions } from "../../../../app/transactions"

const FilterTransactions = () => {
    const selectRef = useRef()
    const dispatch = useDispatch()
    const transactions = useSelector(state => state.transactions.value)
    const loggedInUser = useSelector(state => state.session.value)
 
    // useEffect (() => {
    //     getTransactions (loggedInUser).then ((data) => {
    //         console.log(data);
    //         dispatch(setFilteredTransactions(data.movimientos));
    //     })
    // },[]);

    // getTransactions(loggedInUser)
    //     .then(data => {
    //         dispatch(setTransactions(data.movimientos))
    //     })
    
    const handleSelectOption = () => {
        const filter = selectRef.current.value;
        console.log(filter);
        if(filter === 'ingreso') {
            const ingresos = transactions.filter(tr => tr.categoria > 6);
            console.log(ingresos);
            dispatch(setFilteredTransactions(ingresos))
        } else if(filter === 'gasto') {
            const gastos = transactions.filter(tr => tr.categoria < 7);
            dispatch(setFilteredTransactions(gastos));
        } else {
            dispatch(setFilteredTransactions(transactions))
        }
    }
    

    return(
        <Form.Select aria-label="Default select example" onChange={handleSelectOption} ref={selectRef}>
            <option value="all">Todos</option>
            <option value="ingreso">Ingresos</option>
            <option value="gasto">Gastos</option>
        </Form.Select>


    )
}

export default FilterTransactions