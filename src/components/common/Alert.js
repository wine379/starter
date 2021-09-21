import React from 'react';
import {Alert} from 'react-bootstrap';

const Alert = ({variant, message}) => {
    const [field, meta] = useField(props);

    return (<Alert variant={variant}>{message}</Alert>)
}

export default Alert
