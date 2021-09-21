import React from 'react';
import {Row, Col, Table, ButtonToolbar, Button} from 'react-bootstrap';

class AreaDeliveryStatusElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Area OSS Delivery Progress</b></h8></h8>
                                    
                                        <ButtonToolbar>
                                            <Button variant="outline-primary" className="mt-2 mr-2">Export To Excel</Button>
                                            <Button variant="outline-secondary" className="mt-2 mr-2">Export To PDF</Button>
                                            <Button variant="outline-success" className="mt-2 mr-2">Print</Button>
                                        </ButtonToolbar>
                                    </div>
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <th>#</th>
                                            <th>Status Check</th>
                                            <th>Number of Households</th>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Selected Through Modified CBT</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>2</td>
                                                <td>Verified By LCC</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>3</td>
                                                <td>Awaiting Assistance on Technology Selection</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>4</td>
                                                <td>Selected Technology</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>5</td>
                                                <td>Selected Technology Assessed and Approved</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>6</td>
                                                <td>Contribution Made</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>7</td>
                                                <td>Contribution Verified</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>8</td>
                                                <td>Works Assigned To Contractor</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>9</td>
                                                <td>Works Scheduled</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>10</td>
                                                <td>Works Commenced</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>11</td>
                                                <td>Works Completed</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>12</td>
                                                <td>Completed Works Inspected</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>13</td>
                                                <td>Completion Cerificated Signed</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>14</td>
                                                <td>Trained on proper facility usage and O&M requirements</td>                                              
                                                <td> #### </td>
                                            </tr>
                                            <tr>
                                            <td>15</td>
                                                <td>Works Handed Over</td>                                              
                                                <td> #### </td>
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

export default AreaDeliveryStatusElement;