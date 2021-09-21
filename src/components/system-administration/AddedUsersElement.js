import React, {useCallback, useEffect} from 'react';
import { Row, Col, Table, ButtonToolbar, Button} from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import Loader from '../common/Loader';

const GET_USERS_QUERY = gql`
  query GetUsers {
    User {
        user_name
        first_name
        last_name
        phones {
            phone
        }
        usercategorys {
            user_category_name
        }
    }
  }
`;

const AddedUsersElement = () => {
    const { loading, error, data } = useQuery(GET_USERS_QUERY);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    return(
        <>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                            
                                <h5 className="card-title" style={{ color: 'blue' }}><b>Users</b></h5>
                            </div>
                            
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone Number</th>
                                        <th>Category</th>
                                        <th>Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.User.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            {user.phones.map((phone, i) =>(<td key={i}>{phone.phone}</td>))}
                                            {user.usercategorys.map((usercategory, i) =>(<td key={i}>{usercategory.user_category_name}</td>))}
                                            <td className="text-left">
                                                <ButtonToolbar>
                                                    <Button variant="primary" size="xs" className="mt-2 mr-2 rounded-0">
                                                        view/edit
                                                    </Button>
                                                    <Button variant="primary" size="xs" className="mt-2 mr-2">
                                                        Approve
                                                    </Button>
                                                </ButtonToolbar>  
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

export default AddedUsersElement
