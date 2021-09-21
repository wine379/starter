import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Form, Button, Image } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Logo image file path
import Logo from '../assets/img/logo.png';
const Login = (props) => {
    const     onLoginHandler = () => {
        props.history.push("/");
    }
    return (
        <div className="auth-main-content auth-bg-image">
            <div className="d-table">
                <div className="d-tablecell">
                    <div className="auth-box">
                        <Row>
                            <Col md={12}>
                                <div className="form-content">
                                    <h1 className="heading">Log In</h1>

                                    <Form onSubmit={onLoginHandler}>
                                        <Form.Group>
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>

                                        <div className="text-center">
                                            <Button variant="primary" type="submit">
                                                Log In
                                            </Button>

                                            <Link 
                                                to="/forgot-password/" 
                                                className="fp-link">
                                                Forgot Password?
                                            </Link>
                                        </div>
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

export default Login
