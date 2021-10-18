import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

import { enrolledHouseholdsVar } from '../../util/appCache';
import * as Constants from '../../constants/AppConstants';
import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';
import OSSModalProducts from '../../components/request-for-service/OSSModalProducts';
import SelectionValidationElement from '../../components/request-for-service/SelectionValidationElement';
import BeneficiaryStatusElement from '../../components/request-for-service/BeneficiaryStatusElement';

const TechnologyChoice = () => {
    const { data, loading, error } = useQuery(Constants.GET_HOUSEHOLDS_QUERY);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;
  
    const resultData = data;
    const resultHouseholds = resultData.households;
    const enrolledHouseholds = resultHouseholds.filter((h) => h.enrollment_status === 'Enrolled')
  
    enrolledHouseholdsVar(enrolledHouseholds);
    
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
