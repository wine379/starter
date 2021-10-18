import React from 'react';
import { Row, Col} from 'react-bootstrap';
import CMcasestatus from '../../components/case-management/CMcasestatus';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';


const CaseStatus = () => {
    
    return (
        <>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <HouseholdSearchElement />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <CMcasestatus />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CaseStatus
