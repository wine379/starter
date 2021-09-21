import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Form, Button, Image } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Logo image file path
import Logo from './../../assets/img/logo.png';

const RegisterUser = () => {
       const onSignupHandler = () => {
        props.history.push("/");
    }

    return (
        <div className="auth-main-content auth-bg-image">
            <div className="d-table">
                <div className="d-tablecell">
                    <div className="auth-box">
                        <Row>
                            <Col md={12}>
                                <div className="form-left-content">
                                    <div className="auth-logo">
                                        <Image src={Logo} alt="Logo" />
                                    </div>

                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <div className="form-content">
                                    <h1 className="heading">Register User</h1>

                                    <Form onSubmit={onSignupHandler}>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as = {Col}>
                                                <Form.Label>username</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as = {Col}>
                                                <Form.Label>User Category</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select Category...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <div className="text-center">
                                                    <Button variant="primary"  size="sm" type="submit">
                                                        Register User
                                                    </Button>
                                                </div>
                                            </Form.Group>
                                        </Form.Row>
                                            
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser
