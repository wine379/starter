import React from 'react';
import { Row, Col} from 'react-bootstrap';
import CMaddcase from '../../components/case-management/CMaddcase';
import CMaddedcases from '../../components/case-management/CMaddedcases';

const CaseRegister = () => {

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
                                    <CMaddcase />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <CMaddedcases />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CaseRegister
