import React from 'react';
import { Row, Col} from 'react-bootstrap';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';
import BeneficiaryApprovedTechnologyElement from '../../components/request-for-service/BeneficiaryApprovedTechnologyElement';

const TechnologyApproval = () => {
    
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
                                    <HouseholdSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col lg={12}>
                                {/* File path: */}
                                <BeneficiaryApprovedTechnologyElement />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TechnologyApproval
