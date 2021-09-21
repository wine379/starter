import React from 'react';
import { Row, Col} from 'react-bootstrap';

//IMPORT COMPONENTS

import HHSearchElement from '../../components/reports/HHSearchElement';
import HHDeliveryStatusElememnt from '../../components/reports/HHDeliveryStatusElement';

const HHProgress = () => {
    
    return (
        <>      
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title"></h5>
                            </div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <HHSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    < HHDeliveryStatusElememnt />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HHProgress