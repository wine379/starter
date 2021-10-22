import {Row, Col, Form, Button} from 'react-bootstrap';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

//IMPORT COMPONETS
 import CustomSelectInput from './CustomSelectInput';
 import CustomTextInput  from './CustomTextInput';
 import RegionSelection from './RegionSelection';
 import DistrictSelection from './DistrictSelection';
 import TASelection from './TASelection';
 import GVHSelection from './GVHSelection';
 import VillageSelection from './VillageSelection';

 const HouseholdSearchElement = () => {

    return (
        <>
            <Formik
                initialValues={{ 
                    region: '',
                    district: '',
                    ta: '',
                    gvh: '',
                    village: '', 
                    householdCode: '',
                }}
                validationSchema = {Yup.object({
                    region: Yup.string(),
                    district: Yup.string(),
                    ta: Yup.string(),
                    gvh: Yup.string(),
                    village: Yup.string(), 
                    householdCode: Yup.string(),
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
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Region" name="region">
                                                        <RegionSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="District" name="district">
                                                        <DistrictSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Traditional Authority" name="ta">
                                                        <TASelection />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Group Village Headman" name="gvh">
                                                        <GVHSelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Village" name="village">
                                                        <VillageSelection />
                                                </CustomSelectInput>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdCode} placeholder="Enter household code" label="Household code" name="householdCode"/>
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

export default HouseholdSearchElement;
