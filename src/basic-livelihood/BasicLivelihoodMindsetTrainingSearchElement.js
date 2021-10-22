import {Row, Col, Form, Button} from 'react-bootstrap';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

//IMPORT COMPONETS
 import CustomSelectInput from '../_common/CustomSelectInput';
 import RegionSelection from '../_common/RegionSelection';
 import DistrictSelection from '../_common/DistrictSelection';
 import TASelection from '../_common/TASelection';
 import GroupSelection from '../_common/GroupSelection';
 import CustomSelectWithProps from '../_common/CustomSelectWithProps';
 import ClusterSelection from '../_common/ClusterSelection';

 const BasicLivelihoodMindsetTrainingSearchElement = () => {

    return (
        <>
            <Formik
                initialValues={{ 
                    region: '',
                    district: '',
                    ta: '',
                    cluster: '', 
                    group: '',
                }}
                validationSchema = {Yup.object({
                    region: Yup.string(),
                    district: Yup.string(),
                    ta: Yup.string(),
                    cluster: Yup.string(), 
                    group: Yup.string(),
                })}
                onSubmit={(values, actions) => {
                    console.log(values);
                    
                    setTimeout(() => {
                    actions.setSubmitting(false);
                    }, 1000);
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
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Beneficiary Search Parameters</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Training Type" name="training">
                                                        <CustomSelectWithProps elements={["Group Dynamics","Financial Literacy","Book Keeping","Gender","Business Management","Env. and Social Safeguard","Nutrition Sensitive",]} />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Region" name="region">
                                                        <RegionSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="District" name="district">
                                                        <DistrictSelection />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Traditional Authority" name="ta">
                                                        <TASelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Cluster" name="cluster">
                                                        <ClusterSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Group" name="group">
                                                        <GroupSelection />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Button variant="primary" type="submit" className="mr-1">
                                                {props.isSubmitting ? 'Searching Household...' : 'Search Household'}
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

export default BasicLivelihoodMindsetTrainingSearchElement;
