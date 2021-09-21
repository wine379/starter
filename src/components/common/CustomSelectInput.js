import React from 'react'
import {useField} from 'formik';
import { Form, Col } from 'react-bootstrap';

const CustomSelectInput = ({ label, children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group as={Col}>
            <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
                <Form.Control as="select" {...field} {...props}>
                {children}
                </Form.Control>
                {meta.touched && meta.error ? (<div className="error text-danger">{meta.error}</div>) : null}  
        </Form.Group>
    )
}

export default CustomSelectInput
