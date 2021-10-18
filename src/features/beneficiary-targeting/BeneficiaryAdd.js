import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';


import BTAddElement from '../../components/beneficiary-targeting/BTAddElement';
import BTAddedBeneficiariesElement from '../../components/beneficiary-targeting/BTAddedBeneficiariesElement';
import PendingHouseholdsElement from '../../components/beneficiary-targeting/PendingHouseholdsElement';
import { newlyRegisteredHouseholdsVar, approvedHouseholdsVar } from '../../util/appCache';
import * as Constants from '../../constants/AppConstants';

const BeneficiaryAdd = () => {
    const { data, loading, error } = useQuery(Constants.GET_HOUSEHOLDS_QUERY);

    

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const resultData = data;
  const resultHouseholds = resultData.households;

  const newHouseholds = resultHouseholds.filter((h) => h.enrollment_status === 'Pending')
  const approvedHouseholds = resultHouseholds.filter((h) => h.enrollment_status === 'Approved')

  newlyRegisteredHouseholdsVar(newHouseholds)
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
                                    <BTAddElement />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    <PendingHouseholdsElement />
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
