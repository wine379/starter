import {Row, Col, Form, Button} from 'react-bootstrap';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

//IMPORT COMPONETS
 import CustomSelectInput from '../../components/common/CustomSelectInput';
 import CustomTextInput  from '../../components/common/CustomTextInput';
 import AreaSelection from '../../components/common/AreaSelection';  
 import WardSelectionList from '../../components/common/WardSelectionList';
 import {householdSearchVariables} from '../../util/appCache';

 const BTSearchElement = () => {

    return (
        <>
            <Formik
                initialValues={{  
                    ward: '',
                    area: '',
                    householdCode: '',
                    phoneNumber: '',
                }}
                validationSchema = {Yup.object({
                    ward: Yup.string(),
                    area: Yup.string(),
                    householdCode: Yup.string(),
                    phoneNumber: Yup.string()
                        .min(10, "Must have a minimum of 10 digits")
                        .matches(/^[0-9]+$/, "Must be only digits")
                })}
                onSubmit={(values, actions) => {
                    householdSearchVariables(values)

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
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Ward" name="ward">
                                                        <WardSelectionList />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Area" name="area">
                                                    <AreaSelection />
                                                </CustomSelectInput>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter phone number" label="Phone number" name="phoneNumber"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdCode} placeholder="Enter household code" label="Household code" name="householdCode"/>
                                            </Form.Row>
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Search Beneficiary...' : 'Search Beneficiary'}
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

export default BTSearchElement