import { useRef } from "react";
import AddForm from "./AddForm"
import { Button,Modal } from "react-bootstrap";
import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalNew({tableGrid})
{
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleButtonClick = () => {
        // Perform any logic or API calls here
    
        // Close the modal
        handleClose();
      };

    return(
        <div>

            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} /> User
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* Modal content goes here */}
                    <AddForm customClose={handleClose} toFormgrid={tableGrid} />
                </Modal.Body>
                
            </Modal>

        </div>
    )
}
