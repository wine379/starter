import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { gql, useMutation} from '@apollo/client';

//IMPORT COMPONETS
 import CustomTextInput  from '../common/CustomTextInput';
 import CustomSelectInput from '../common/CustomSelectInput';
 import UserCategorySeletion from '../common/UserCategorySeletion';
 import AgeCategorySelection from '../common/AgeCategorySelection'
//  import OrganizationSelection from '../common/OrganizationSelection';

const startDate = new Date()

const CREATE_USER_QUERY = gql`
 mutation CreateUser(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $nationalID: String!
    $ageCategory: ID!
    $emailAddress: String!
    $phoneNumber: String!
    $userCategory: ID!

 ){
   createUser(
    userName: $userName
    firstName: $firstName
    lastName: $lastName
    nationalID: $nationalID
    ageCategory: $ageCategory
    emailAddress: $emailAddress
    phoneNumber: $phoneNumber
    userCategory: $userCategory
  ){
    user_name
  }
 }
`;
 Yup.setLocale({
     mixed: {
         notType: '${path} is required,'
     }
 });

const UsersElement = () => {
    const [addUser, { data, loading, error }] = useMutation(CREATE_USER_QUERY);
    return (
        <>
            <Formik
                initialValues={{
                   firstName: '',
                   lastName: '',
                   nationalID: '',
                   ageCategory: '',
                   emailAddress: '',
                   phoneNumber: '',
                   userCategory: '',
                }}
                validationSchema = {Yup.object({
                    firstName: Yup.string()
                        .required('Required'),
                    lastName: Yup.string()
                        .required('Required'),
                    nationalID: Yup.string()
                        .required('Required'),
                    ageCategory: Yup.string()
                    .required('Required'),
                    emailAddress: Yup.string()
                        .email()
                        .required('Required'),
                    phoneNumber: Yup.string()
                        .required('Required'),
                    userCategory: Yup.string()
                        .required('Required'),                 
                })}
                onSubmit={(values, actions) => {
                    const code = Date.now().toString(16).toUpperCase();
                    let userCode = "U_";
                    userCode += code;
                    

                    addUser({ variables: { 
                        userName: userCode,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        nationalID: values.nationalID,
                        ageCategory: values.ageCategory,
                        emailAddress: values.emailAddress,
                        phoneNumber: values.phoneNumber,
                        userCategory: values.userCategory
                     } });
                    
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 3000);
                }}
                validator={() => ({})}
                >
                    {props => (
                        <div className="page-wrapper">
                        <Row>
                            <Col xl={12}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Add User</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row> 
                                                <Form.Group as={Col} controlId="first-name">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.firstName} placeholder="Enter First Name" label="First Name" name="firstName"/>
                                                </Form.Group> 
                                                <Form.Group as={Col} controlId="last-name">
                                                  <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.lastName} placeholder="Enter Last Name" label="Last Name" name="lastName"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="national-id">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.nationalID} placeholder="Enter National ID" label="National ID" name="nationalID"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="national-id">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ageCategory} label="Select User Age Category" name="ageCategory">
                                                        <AgeCategorySelection />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="email-address">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.emailAddress} placeholder="Enter Email Address" label="Email Address" name="emailAddress"/>
                                                </Form.Group>  
                                                <Form.Group as={Col} controlId="phone-number">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter Phone Number" label="Phone Number" name="phoneNumber"/>
                                                </Form.Group>   
                                                <Form.Group as={Col} controlId="user-category">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.userCategory} label="User Category" name="userCategory">
                                                        <UserCategorySeletion />
                                                    </CustomSelectInput>
                                                </Form.Group>       
                                            </Form.Row> 
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Registering user...' : 'Register user'}
                                            </Button>
                                        </Form>
                                        
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>       
                    )}
            </Formik> 
        </>           
    )
}

export default UsersElement