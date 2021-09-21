import React from 'react';
import { Row, Col} from 'react-bootstrap';
import OSSWorksSearchElement from '../../components/oss-works/OSSWorksSearchElement';
import OSSWorksContractorAllocationElement from '../../components/oss-works/OSSWorksContractorAllocationElement';

const ContractorAllocation = () => {
    
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
                                    <OSSWorksSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <OSSWorksContractorAllocationElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ContractorAllocation
