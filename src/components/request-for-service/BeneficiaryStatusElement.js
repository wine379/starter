import React from 'react';
import { Row, Col, Table, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import Loader from '../common/Loader';
import * as Constants from '../../constants/AppConstants';

const BeneficiaryStatusElement = () => {
    const { data: householdsData, loading: householdsLoading, error: householdsError } = useQuery(Constants.GET_ENROLLED_HOUSEHOLDS_QUERY);
    const { data: searchOptionsData, loading: searchOptionsLoading, error: searchOptionsError } = useQuery(Constants.GET_HOUSEHOLDS_SEARCH_OPTIONS_QUERY);
  
    if (householdsLoading) return <Loader />;
    if (householdsError) return `Error! ${householdsError.message}`;
  
    const resultData = householdsData;
    const enrolledHouseholds = resultData.enrolledHouseholds;
  
    let households = enrolledHouseholds;
  
    if(searchOptionsData){
        const options = searchOptionsData.householdsSearchOptions;
        let filteredHouseholds = enrolledHouseholds;

        if(options.ward) filteredHouseholds = filteredHouseholds.filter((h) => h.ward === options.ward);
        if(options.area) filteredHouseholds = filteredHouseholds.filter((h) => h.area === options.area);
        if(options.householdCode) filteredHouseholds = filteredHouseholds.filter((h) => h.household_code === options.householdCode);
        if(options.phoneNumber) filteredHouseholds = filteredHouseholds.filter((h) => h.phone === options.phoneNumber);

        households = filteredHouseholds;
    }

    

    return(
        <Row>
            <Col xl={12}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title">Beneficiary ready to be assigned products</h5>
                        </div>
                        <Table responsive hover className="m-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ward</th>
                                    <th>Area</th>
                                    <th>Block</th>
                                    <th>HH Ref No.</th>
                                    <th>HH Name</th>
                                    <th>Contact No.</th>
                                    <th>Erollment Status</th>
                                    <th className="text-center">Action</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {households.map((household, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{household.ward}</td>
                                        <td>{household.area}</td>
                                        <td>{household.household_block_name}</td>
                                        <td>{household.household_code}</td>
                                        {household.users.map((user, i) =>(<td key={i}>{user.full_name}</td>))}
                                        <td>{household.phone}</td>
                                        <td>{household.enrollment_status}</td>
                                        <td>
                                            <Button variant="secondary">
                                                More..
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default BeneficiaryStatusElement
