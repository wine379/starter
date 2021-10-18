import React from 'react';
import { Row, Col} from 'react-bootstrap';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';
import WorksStartDateElement from '../../components/oss-works/WorksStartDateElement';
import OSSWorksHHStartDatesElement from '../../components/oss-works/OSSWorksHHStartDatesElement';

const WorksStart = () => {
    
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
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <WorksStartDateElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <OSSWorksHHStartDatesElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default WorksStart
