import React from 'react';
import { Row, Col} from 'react-bootstrap';
import TechnologyContributionElement from '../../components/contribe-for-oss/TechnologyContributionElement';

const TechnologyContribution = () => {

    return (
        <> 
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title"></h5>
                            </div>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <TechnologyContributionElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TechnologyContribution
