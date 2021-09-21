import React, {useState, useCallback, useEffect} from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import Loader from '../common/Loader';

const GET_BENEFICIARIES_QUERY = gql`
  query GetBeneficiaries {
    Household {
      wards {
        ward_name
      }
      areas {
        area_name
      }
      household_block_name
      household_code
      household_name
      phones {
        phone
      }
    }
  }
`;

const ApprovedTechnologyCostElement = () => {
    const { loading, error, data } = useQuery(GET_BENEFICIARIES_QUERY);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    return(
        <>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title" style={{ color: 'blue' }}><b>Cost Of Technology</b></h5>
                            </div>
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Area</th>
                                        <th>Block</th>
                                        <th>HH Ref No.</th>
                                        <th>HH Name</th>
                                        <th>Contact No.</th>
                                        <th>Selected Technology</th>
                                        <th>Technology Cost</th>
                                        <th>HH Contribution</th>
                                        <th>HH Notified?</th>
                                        <th>HH Accepted?</th>
                                        <th>Action</th>  
                                    </tr>                     
                                </thead>
                                <tbody>
                                {data.Household.map((household, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        {household.areas.map((area, i) =>(<td key={i}>{area.area_name}</td>))}
                                        <td>{household.household_block_name}</td>
                                        <td>{household.household_code}</td>
                                        <td>{household.household_name}</td>
                                        {household.phones.map((phone, i)=>(<td key={i}>{phone.phone}</td>))}
                                        <td>//NOT IMPLEMENTED</td>
                                        <td>//NOT IMPLEMENTED</td>
                                        <td>//NOT IMPLEMENTED</td>
                                        <td>//NOT IMPLEMENTED</td>
                                        <td> 
                                            <input type="checkbox">
                                            </input>
                                        </td>
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
        </>
    );
}

export default ApprovedTechnologyCostElement