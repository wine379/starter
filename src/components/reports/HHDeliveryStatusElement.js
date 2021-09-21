import React from 'react';
import {Row, Col, Table, ButtonToolbar, Button} from 'react-bootstrap';

class HHDeliveryStatusElememnt extends React.Component {
    state = {
        sideMenu: true
    };

    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        return (
            <div className="page-wrapper">
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Household OSS Delivery Progress</b></h8></h8>
                                    
                                        <ButtonToolbar>
                                            <Button variant="outline-primary" className="mt-2 mr-2">Export To Excel</Button>
                                            <Button variant="outline-secondary" className="mt-2 mr-2">Export To PDF</Button>
                                            <Button variant="outline-success" className="mt-2 mr-2">Print</Button>
                                        </ButtonToolbar>
                                    </div>
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Status Check</th>
                                                <th>YES</th>
                                                <th>NO</th> 
                                            </tr>
                                            
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Selected Through Modified CBT</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Verified By LCC</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Awaiting Assistance on Technology Selection</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Selected Technology</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Selected Technology Assessed and Approved</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Contribution Made</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Contribution Verified</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Works Assigned To Contractor</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Works Scheduled</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Works Commenced</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Works Completed</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Completed Works Inspected</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Completion Cerificated Signed</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>HH Trained</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Works Handed Over</td>                                              
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox" disabled>
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Basic Table */}
                </div>     
                
            
        );
    }
}

export default HHDeliveryStatusElememnt;