import React, {useState} from 'react';
import {Col, Form, Button} from 'react-bootstrap';

const SelectionValidationElement = () => {
    const [state, setState] = useState({ validated: false });
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setState({ validated: true });
    }
    return (
        <Col xl={12}>
                
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title" style={{ color: 'blue' }}><b>Technical Guidance and Readiness For Selection</b></h5>
                    </div>
                <Form
                        noValidate
                        validated={state.validated}
                        onSubmit={e => handleSubmit(e)}
                    >
        
        
                    <Form.Row>
                        <Form.Group as={Col} md="3" controlId="validationCustom01">
                            <Form.Label>Do You Need Technical Quidance Before Making Your Selection?</Form.Label>
                            <Form.Control as="select">
                                <option>YES</option>
                                <option>NO</option>
                            </Form.Control> 
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom02">
                            <Form.Label>Are You Ready to Make Your Technology Choice At This Time?</Form.Label>
                            <Form.Control as="select">
                                <option>YES</option>
                                <option>NO</option>
                            </Form.Control> 
                            
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        
                    </Form.Row>

                    <Form.Row>
                        
                    </Form.Row>

                    <Form.Group>
                        <Form.Check
                            required
                            label="Household agrees to terms and conditions of OSS"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>

                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </Col>
    )
}

export default SelectionValidationElement
