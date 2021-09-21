import React, {useState} from 'react';
import { Row, Col} from 'react-bootstrap';
import TechnologyApprovalSearchElement from '../../components/request-for-service/TechnologyApprovalSearchElement';
import ApprovedTechnologyCostElement from '../../components/request-for-service/ApprovedTechnologyCostElement';

const TechnologyCost = () => {
    const [state, setState] = useState({sideMenu: true});

    const _onSideMenu = (active) => {
        setState({ sideMenu: active });
    }
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
                                    <TechnologyApprovalSearchElement />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <ApprovedTechnologyCostElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TechnologyCost
