import React from 'react';
import { Row, Col} from 'react-bootstrap';

//IMPORT COMPONENTS

import AreaSearchElement from '../../components/reports/AreaSearchElement';
import AreaDeliveryStatusElement from '../../components/reports/AreaDeliveryStatusElement';

const AreaProgress = () => {
    
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
                                    <AreaSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    < AreaDeliveryStatusElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default AreaProgress
