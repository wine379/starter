import React, {useCallback} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {Formik, useField} from 'formik';
import * as Yup from 'yup';
import useBeneficiaryStore from '../../stores/useBeneficiaryStore';

import WardSelectionList from '../../components/common/WardSelectionList';
import AreaSelection from '../../components/common/AreaSelection';  
import AverageMonthlyIncome from '../../components/common/AverageMonthlyIncome';  
import HomeOwnership from '../../components/common/HomeOwnership';  
import AgeCategorySelection from '../../components/common/AgeCategorySelection';  
import HouseholdLatrine from '../../components/common/HouseholdLatrine';  
import IsPoor from '../../components/common/IsPoor';  
import IsVulnerable from '../../components/common/IsVulnerable';  
import MainSourceOfLivelihood from '../../components/common/MainSourceOfLivelihood';  
import StructureLocationZone from '../../components/common/StructureLocationZone';  
import WillPayFull from '../../components/common/WillPayFull'; 



const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <Form.Group as={Col} controlId="block">
                <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
                <Form.Control type="text" {...field} {...props} />
                {meta.touched && meta.error ? (<div className="error text-danger">{meta.error}</div>) : null}
        </Form.Group>
    )
}


const CustomSelectInput = ({ label, children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group as={Col} controlId={props.id}>
            <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
                <Form.Control as="select" {...field} {...props}>
                {children}
                </Form.Control>
                {meta.touched && meta.error ? (<div className="error text-danger">{meta.error}</div>) : null}  
        </Form.Group>
    )
}


const BTAddElement = () => {
    return (
        <>
            <Formik
                initialValues={{
                    ward: '',
                    area: '',
                    ageCategory: '',
                    monthlyIncomeRange: '',
                    homeOwnershipCategory: '',
                    latrineType: '',
                    mainSourceOfLivelihood: '',
                    structureLocationZone: '',
                    blockName: '',
                    plotNumber: '',
                    phoneNumber: '',
                    householdName: '',
                    isPoorHousehold: '',
                    isVulnerableHousehold: '',
                    willHouseholdPayFullForOSS: '',

                }}
                validationSchema = {Yup.object({
                    ward: Yup.string()
                        .required('Required'),
                    area: Yup.string()
                        .required('Required'),
                    ageCategory: Yup.string()
                        .required('Required'),
                    monthlyIncomeRange: Yup.string()
                        .required('Required'),
                    homeOwnershipCategory: Yup.string()
                        .required('Required'),
                    latrineType: Yup.string()
                        .required('Required'),
                    mainSourceOfLivelihood: Yup.string()
                        .required('Required'),
                    structureLocationZone: Yup.string()
                        .required('Required'),
                    blockName: Yup.string().required('Required'),
                    plotNumber: Yup.string().required('Required'),
                    phoneNumber: Yup.string()
                        .matches(/^[0-9]+$/, "Must be only digits")
                        .required('Required'),
                    householdName: Yup.string().required('Required'),
                    isPoorHousehold: Yup.string()
                        .oneOf(["YES", "NO"])
                        .required('Required'),
                    isVulnerableHousehold: Yup.string()
                        .oneOf(["YES", "NO"])
                        .required('Required'),
                    willHouseholdPayFullForOSS: Yup.string()
                        .oneOf(["YES", "NO"])
                        .required('Required'),
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 3000)
                }}
                >
                    {props => (
                        <Row>
                        <Col xl={12}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="card-title"></h5>
                                        </div>
                                        <Form>
                                            <Form.Row>
                                                <CustomSelectInput value={values.wardCode} label="Ward" name="ward">
                                                    <WardSelectionList />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Area" name="area">
                                                    <AreaSelection />
                                                </CustomSelectInput>
                                                <CustomTextInput placeholder="Enter block name" label="Block name" name="blockName"/>
                                                <CustomTextInput placeholder="Enter plot number" label="Plot number" name="plotNumber"/>
                                                <CustomTextInput placeholder="Enter phone number" label="Phone number" name="phoneNumber"/>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomTextInput placeholder="Enter household name" label="Household name" name="householdName"/>
                                                <CustomSelectInput label="Head Age Category" name="ageCategory">
                                                    <AgeCategorySelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Main Livelihood" name="mainSourceOfLivelihood">
                                                    <MainSourceOfLivelihood />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Average Monthly Income" name="monthlyIncomeRange">
                                                    <AverageMonthlyIncome />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Home Ownership Status" name="homeOwnershipCategory">
                                                    <HomeOwnership />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomSelectInput label="Structure Location Zone" name="structureLocationZone">
                                                    <StructureLocationZone />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Household Latrine" name="latrineType">
                                                    <HouseholdLatrine />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Vulnerable Household?" name="isVulnerableHousehold">
                                                    <IsVulnerable />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Poor Household?" name="isPoorHousehold">
                                                    <IsPoor />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Pay Full for OSS?" name="willHouseholdPayFullForOSS">
                                                    <WillPayFull />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Registering household...' : 'Register household'}
                                            </Button>
                                        </Form>
                                        
                                    </div>
                                </div>
                        </Col>
                    </Row>   
                    )}

            </Formik>
            
        </>
    )
}

export default BTAddElement