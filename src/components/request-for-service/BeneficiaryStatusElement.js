import React from 'react';
import { Row, Col, Table, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
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
      users {
          user_name
          first_name
          last_name
      }
      phones {
        phone
      }
    }
  }
`;
const BeneficiaryStatusElement = () => {
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
                                <h5 className="card-title" style={{ color: 'blue' }}><b>Beneficiary Choice Making Status</b></h5>
                            </div>
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>City</th>
                                        <th>Area</th>
                                        <th>Block</th>
                                        <th>HH Ref No.</th>
                                        <th>HH Name</th>
                                        <th>Contact No.</th>
                                        <th>Choice Making Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.Household.map((household, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>Lilongwe</td>
                                            {household.areas.map((area, i) =>(<td key={i}>{area.area_name}</td>))}
                                            <td>{household.household_block_name}</td>
                                            <td>{household.household_code}</td>
                                            {household.users.map((user, i) =>(<td key={i}>{user.first_name + ' ' + user.last_name}</td>))}
                                            {household.phones.map((phone, j) =>(<td key={j}>{phone.phone}</td>))}
                                            <td>Ready</td>
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
    )
}

export default BeneficiaryStatusElement
