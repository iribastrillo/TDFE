import { Modal } from "react-bootstrap";

import TransactionForm from "./TransactionForm/TransactionForm";

const TransactionModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar un movimiento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TransactionForm/>
            </Modal.Body>
        </Modal>
    )
}

export default TransactionModal;