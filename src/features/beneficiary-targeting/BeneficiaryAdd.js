import React from 'react';
import { Row, Col} from 'react-bootstrap';
import BTAddElement from '../../components/beneficiary-targeting/BTAddElement';
import BTAddedBeneficiariesElement from '../../components/beneficiary-targeting/BTAddedBeneficiariesElement';

const BeneficiaryAdd = () => {

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
                                    <BTAddElement />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <BTAddedBeneficiariesElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default BeneficiaryAdd
