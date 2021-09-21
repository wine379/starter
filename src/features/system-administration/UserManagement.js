import React from 'react';
import { Row, Col, ButtonToolbar, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import AddedUsersElement from '../../components/system-administration/AddedUsersElement';
import UsersElement from '../../components/system-administration/UsersElement';
const UserManagement = () => {
    
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
                            <ButtonToolbar>  
                                <Link to="/register-user"><Button variant="outlined" color="primary">Register User</Button></Link>
                                <Link to="/forgot-password"><Button variant="outlined" color="primary">Forgot Password</Button></Link>
                                <Link to="/register"><Button variant="outlined" color="primary">Roles and Permissions</Button></Link>
                            </ButtonToolbar>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <UsersElement />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <AddedUsersElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default UserManagement
