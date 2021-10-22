import {Row, Col, Form, Button} from 'react-bootstrap';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

//IMPORT COMPONETS
 import CustomSelectInput from '../_common/CustomSelectInput';
 import CustomTextInput  from '../_common/CustomTextInput';
 import RegionSelection from '../_common/RegionSelection';
 import DistrictSelection from '../_common/DistrictSelection';
import CustomSelectWithProps from '../_common/CustomSelectWithProps';

 const BasicLivelihoodSensitizationRegistrationElement = () => {

    return (
        <>
            <Formik
                initialValues={{ 
                    region: '',
                    district: '',
                    purpose: '',
                    sectorCommittee: '',
                    femalesOriented: '',
                    malesOriented: '',
                    dateOfOrientation: '',
                }}
                validationSchema = {Yup.object({
                  region: Yup.string().required('Required'),
                  district: Yup.string().required('Required'),
                  purpose: Yup.string().required('Required'),
                  sectorCommittee: Yup.string().required('Required'),
                  femalesOriented: Yup.number().required('Required'),
                  malesOriented: Yup.number().required('Required'),
                  dateOfOrientation: Yup.date().required('Required'),
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
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Sensitization and Awareness Meetings Registration</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Region" name="region">
                                                        <RegionSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="District" name="district">
                                                        <DistrictSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Purpose" name="purpose">
                                                    <CustomSelectWithProps
                                                    elements={[ "Project Sensitization", "CBDRA Awareness"]} />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Target Audiance" name="sectorCommittee">
                                                    <CustomSelectWithProps
                                                    elements={[ "DSSC", "DEC", "CSSC", "ADC", "Extention workers", "Beneficiaries",]} />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdCode} placeholder="Number of Females" label="Females Oriented" name="femalesOriented"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdCode} placeholder="Number of Males" label="Males Oriented" name="malesOriented"/>
                                                <Form.Control 
                                                    type="date" 
                                                    name='dateOfOrientation' 
                                                    aria-label="Date" />
                                            </Form.Row>
                                            <Button variant="primary" type="submit" className="mr-1">
                                                {props.isSubmitting ? 'Registering Meeting...' : 'Register Meeting'}
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

export default BasicLivelihoodSensitizationRegistrationElement;
