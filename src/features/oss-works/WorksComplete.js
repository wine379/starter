import React from 'react';
import { Row, Col} from 'react-bootstrap';
import OSSWorksCompletionElement from '../../components/oss-works/OSSWorksCompletionElement';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';

const WorksComplete = () => {
    
    return (
        <>     
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title">OSS Search</h5>
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
                                    < OSSWorksCompletionElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default WorksComplete
