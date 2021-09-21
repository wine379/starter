import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';

const OSSWorksStartDateElement = () => {
    return (
    
<Row>
   <Col xl={12}>
       <div className="card mb-4">
           <div className="card-body">
               <div className="card-header">
                   <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>HH Search Parameters</b></h8></h8>
               </div>

               <Form>
                   <Form.Row>
                        <Form.Group as={Col} controlId="Ward">
                           <Form.Label>Ward</Form.Label>
                           <Form.Control as="select">
                               <option>Select Ward...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>
                                        
                   </Form.Row>
               </Form>
           </div>
       </div>
   </Col>
</Row>
    )
}

export default OSSWorksStartDateElement
