import React from 'react';
import { Row, Col} from 'react-bootstrap';
import CMcasestatus from '../../components/case-management/CMcasestatus';

const CaseStatus = () => {
    
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
