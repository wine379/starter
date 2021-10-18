import React from 'react';
import { Row, Col} from 'react-bootstrap';
import CMresolvedcases from '../../components/case-management/CMresolvedcases';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';


const ResolvedCases = () => {
    
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
                                    <CMresolvedcases />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ResolvedCases
