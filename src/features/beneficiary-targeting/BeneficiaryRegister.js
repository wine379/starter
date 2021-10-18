import React from 'react';
import { Row, Col} from 'react-bootstrap';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';
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
                                    <HouseholdSearchElement />
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
