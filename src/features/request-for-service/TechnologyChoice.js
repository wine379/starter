import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RfSSearchElement from '../../components/request-for-service/RfSSearchElement';
import OSSModalProducts from '../../components/request-for-service/OSSModalProducts';
import SelectionValidationElement from '../../components/request-for-service/SelectionValidationElement';
import BeneficiaryStatusElement from '../../components/request-for-service/BeneficiaryStatusElement';

const TechnologyChoice = () => {
    
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
                                    <RfSSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    {/* <OSSModalProducts /> */}
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <SelectionValidationElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <BeneficiaryStatusElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TechnologyChoice
