import React, {useState} from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';

//IMPORT COMPONETS

 import CustomTextInput  from '../common/CustomTextInput';

 const CREATE_CONTRACTOR_QUERY = gql`
  mutation CreateContractor(
    $contractorCode: String!
    $contractorName: String!
    $contractorPostalAddress: String!
    $contractorPhoneNumber: String!
    $contractorEmail: String!

  ){
    createContractor(
        contractorCode: $contractorCode
        contractorName: $contractorName
        contractorPostalAddress: $contractorPostalAddress
        contractorPhoneNumber: $contractorPhoneNumber
        contractorEmail: $contractorEmail
   ){
    contractor_code
   }
  }
`;
 

const AddContractorElement = () => {
    const [addContractor, { data, loading, error }] = useMutation(CREATE_CONTRACTOR_QUERY);

    return (
        <>
            <Formik
                initialValues={{  
                    contractorName: '',
                    postalAddress: '',
                    emailAddress: '',
                    phoneNumber: '',
                }}
                validationSchema = {Yup.object({

                    contractorName: Yup.string()
                        .required('Required'),
                    postalAddress: Yup.string()
                        .required('Required'),
                    emailAddress: Yup.string()
                        .email()
                        .required('Required'),
                    phoneNumber: Yup.string()
                        .min(10, "Must have a minimum of 10 digits")
                        .matches(/^[0-9]+$/, "Must be only digits")
                        .required('Required'),                  
                })}
                onSubmit={(values, actions) => {
                    const code = Date.now().toString(16).toUpperCase();
                    let contractorCode = "CT-";

                    contractorCode += code;
                    

                    addContractor({ variables: { 
                        contractorCode: contractorCode,
                        contractorName: values.contractorName,
                        contractorPostalAddress: values.postalAddress,
                        contractorPhoneNumber: values.phoneNumber,
                        contractorEmail: values.emailAddress
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
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Add Contractor</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>    
                                            <Form.Row>  
                                                <Form.Group as={Col} controlId="contractor-name">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.contractorName} placeholder="Enter Name of Contractor" label="Contractor Name" name="contractorName"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="postal-address">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.postalAddress} placeholder="Enter Postal Address" label="Postal Address" name="postalAddress"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="email-address">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.emailAddress} placeholder="Enter Email Address" label="Email Address" name="emailAddress"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="phone-number">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter Phone Number" label="Phone Number" name="phoneNumber"/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Button variant="primary" type="submit">
                                            {props.isSubmitting ? 'Adding contrator...' : 'Add contractor'}
                                            </Button>
                                        </Form>       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* End Basic Table */}
                    </div>           
                    )}
            </Formik>   
        </>
        
                
    )
}

export default AddContractorElement
