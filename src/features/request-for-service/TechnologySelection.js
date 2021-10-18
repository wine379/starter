import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';


import Loader from '../../components/common/Loader';
import * as Constants from '../../constants/AppConstants';
import { approvedHouseholdsVar } from '../../util/appCache';


import HouseholdSearchElement from '../../components/common/HouseholdSearchElement';
import BeneficiarySelectedTechnologyElement from '../../components/request-for-service/BeneficiarySelectedTechnologyElement';

const TechnologySelection = () => {
    const { data, loading, error } = useQuery(Constants.GET_HOUSEHOLDS_QUERY);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  

  const resultData = data;
  const resultHouseholds = resultData.households;
  const approvedHouseholds = resultHouseholds.filter((h) => h.enrollment_status === 'Approved')

  approvedHouseholdsVar(approvedHouseholds)
    
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
                                    <BeneficiarySelectedTechnologyElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TechnologySelection
