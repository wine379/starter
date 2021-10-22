import React from 'react'
import {useField} from 'formik';
import { Form, Col } from 'react-bootstrap';

const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return(
    <Form.Group as={Col}>
      <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
      <Form.Control type="text" {...field} {...props} />
      {meta.touched && meta.error ? (<div className="error text-danger">{meta.error}</div>) : null}
    </Form.Group>
  )
}

export default CustomTextInput
