import React from 'react'
import {Row, Col, Button, Table} from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import Loader from '../common/Loader';

const GET_CONTRACTORS_QUERY = gql`
  query GetContractors {
    Contractor {
      contractor_code
      contractor_name
      contractor_postal_address
      emails {
        email
      }
      phones {
        phone
      }
    }
  }
`;

const ContractorsElement = () => {
    const { loading, error, data } = useQuery(GET_CONTRACTORS_QUERY);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;
    
    return ( 
        <>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title" style={{ color: 'blue' }}><b>Contractors</b></h5>
                            </div>
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Contractor Code</th>
                                        <th>Contractor Name</th>
                                        <th>Address</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Number Of Projects</th>
                                        <th>Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                {data.Contractor.map((contractor, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{contractor.contractor_code}</td>
                                        <td>{contractor.contractor_name}</td>
                                        <td>{contractor.contractor_postal_address}</td>
                                        {contractor.phones.map((phone, i)=>(<td key={i}>{phone.phone}</td>))}
                                        {contractor.emails.map((email, i)=>(<td key={i}>{email.email}</td>))}
                                        <td>2 Test projects</td>
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
            {/* End Basic Table */}
        </>   
    )
}


export default ContractorsElement
