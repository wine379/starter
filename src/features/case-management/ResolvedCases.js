import React from 'react';
import { Row, Col} from 'react-bootstrap';
import CMresolvedcases from '../../components/case-management/CMresolvedcases';

const ResolvedCases = () => {
    
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
