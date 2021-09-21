import React from 'react';
import { Row, Col} from 'react-bootstrap';
import TechnologySelectionSearchElement from '../../components/request-for-service/TechnologySelectionSearchElement';
import BeneficiarySelectedTechnologyElement from '../../components/request-for-service/BeneficiarySelectedTechnologyElement';

const TechnologySelection = () => {
    
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
                                    <TechnologySelectionSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <BeneficiarySelectedTechnologyElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TechnologySelection
