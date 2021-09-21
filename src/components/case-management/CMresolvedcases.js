import React from 'react';
import { Row, Col, Table, ButtonToolbar, Button } from 'react-bootstrap';


const CMresolvedcases = () => {
    return (

        <Row>
            <Col xl={12}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title">Registered Cases</h5>
                        </div>

                        <Table responsive hover className="m-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>City</th>
                                    <th>Area</th>
                                    <th>Block</th>
                                    <th>Complaint</th>
                                    <th>Current Status</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Lilongwe</td>
                                    <td>Area 36</td>
                                    <td>Victoria</td>
                                    <td>xxxxxx</td>
                                    <td>Resolved</td>
                                    
                                    
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default CMresolvedcases
