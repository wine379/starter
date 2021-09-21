import React, {useState} from 'react';
import {Modal, Button, ButtonToolbar, Image } from 'react-bootstrap';
import SIV from '../../assets/img/singleVIP1.jpg';

const DefaultModal = (props) => {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                OSS Products
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h5>Single VIP Toilet 1</h5>
            <p>
                
                <Image src={SIV} />
            </p>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>);
    
}

const SVIPModal = () => {
    const [state, setState] = useState({ modalShow: false });
    let modalClose = () => setState({ modalShow: false });
    return (
         <ButtonToolbar>
                <Button
                    variant="secondary"
                    onClick={() => setState({ modalShow: true })}
                >
                    Show sample...
                </Button>

                <DefaultModal
                    show={state.modalShow}
                    onHide={modalClose}
                />
            </ButtonToolbar>
        );
}

export default SVIPModal
