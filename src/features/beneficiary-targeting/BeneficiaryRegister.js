import React from 'react';
import { Row, Col} from 'react-bootstrap';
import BTSearchElement from '../../components/beneficiary-targeting/BTSearchElement';
import BTBeneficiariesElement from '../../components/beneficiary-targeting/BTBeneficiariesElement';


const BeneficiaryRegister = () => {
    
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
                                    <BTSearchElement />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <BTBeneficiariesElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default BeneficiaryRegister
