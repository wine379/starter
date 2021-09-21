import React, {useState, useCallback} from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';

//IMPORT COMPONETS
 import CustomTextInput  from '../common/CustomTextInput';
 import BrowseProductPicElement from './BrowseProductPicElement'; 

 const CREATE_PRODUCT_QUERY = gql`
 mutation CreateProduct(
    $productCode: String!
    $productName: String!
    $productDescription: String!
    $productCost: Float!
    $householdContribution: Float!
    $implementationPeriod: Float!

 ){
   createProduct(
    productCode: $productCode
    productName : $productName
    productDescription: $productDescription
    productCost : $productCost
    householdContribution: $householdContribution
    implementationPeriod: $implementationPeriod
  ){
    product_code
  }
 }
`;

 Yup.setLocale({
     mixed: {
         notType: '${path} is required,'
     }
 });

const AddProductElement = () => {
    const [addProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT_QUERY);

    return (
        <>
            <Formik
                initialValues={{
                    productName: '',
                    productDescription: '',
                    productCost: '',
                    householdContribution: '',
                    implementationPeriod: '',
                    fileUpload: '',
                }}
                validationSchema = {Yup.object({

                    productName: Yup.string()
                        .required('Required'),
                    productDescription: Yup.string()
                        .required('Required'),
                    productCost: Yup.number()
                        .required('Required'),
                    householdContribution: Yup.number()
                        .required('Required'),
                    implementationPeriod: Yup.number()
                        .required('Required'),
                    fileUpload:  Yup.object().shape({
                        name: Yup.string()
                      }).label('File')
                      
                })}
                onSubmit={(values, actions) => {
                    const code = Date.now().toString(16).toUpperCase();
                    let productCode = "PD-";

                    productCode += code;
                    

                    addProduct({ variables: { 
                        productCode: productCode,
                        productName: values.productName,
                        productDescription: values.productDescription,
                        productCost: parseFloat(values.productCost),
                        householdContribution: parseFloat(values.householdContribution),
                        implementationPeriod: parseFloat(values.implementationPeriod)
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
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Add Product</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>  
                                                <Form.Group as={Col} controlId="product-name">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.productName} placeholder="Enter Name of Product" label="Product Name" name="productName"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="product-description">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.productDescription} placeholder="Enter Product Description" label="Product Description" name="productDescription"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="product-cost">
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.productCost} placeholder="Enter Product Cost" label="Product Cost" name="productCost"/>
                                                </Form.Group>
                                            </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="household-contribution">
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdContribution} placeholder="Enter Household Contribution" label="Household Contribution" name="householdContribution"/>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="implementation-period">
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.implementationPeriod} placeholder="Enter Implementation Period" label="Implementation Period" name="implementationPeriod"/>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="product-desc">
                                                < BrowseProductPicElement />
                                            </Form.Group>  
                                         </Form.Row>
                                            <Button variant="primary" type="submit">
                                            {props.isSubmitting ? 'Adding product...' : 'Add product'}
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

export default AddProductElement
