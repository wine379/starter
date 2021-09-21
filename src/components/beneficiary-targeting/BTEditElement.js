import React, {useCallback} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {Formik} from 'formik';
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
import CustomTextInput  from '../../components/common/CustomTextInput';
import CustomSelectInput  from '../../components/common/CustomSelectInput';



const BTEditElement = () => {
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
                        .min(10, "Must have a minimum of 10 digits")
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
                onSubmit={(values, actions) => {

                  setTimeout(() => {
         
                    alert(JSON.stringify(values, null, 2));
         
                    actions.setSubmitting(false);
         
                  }, 10000);
                }}
                validator={() => ({})}
                >
                    {props => (
                        <Row>
                        <Col xl={12}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="card-header">
                                        <h5 className="card-title" style={{ color: 'blue' }}><b>Edit Household</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Ward" name="ward">
                                                    <WardSelectionList />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Area" name="area">
                                                    <AreaSelection />
                                                </CustomSelectInput>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.blockName}  placeholder="Enter block name" label="Block name" name="blockName"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.plotNumber} placeholder="Enter plot number" label="Plot number" name="plotNumber"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter phone number" label="Phone number" name="phoneNumber"/>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdName} placeholder="Enter household name" label="Household name" name="householdName"/>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ageCategory} label="Head Age Category" name="ageCategory">
                                                    <AgeCategorySelection />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.mainSourceOfLivelihood} label="Main Livelihood" name="mainSourceOfLivelihood">
                                                    <MainSourceOfLivelihood />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.monthlyIncomeRange} label="Average Monthly Income" name="monthlyIncomeRange">
                                                    <AverageMonthlyIncome />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.homeOwnershipCategory} label="Home Ownership Status" name="homeOwnershipCategory">
                                                    <HomeOwnership />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.structureLocationZone} label="Structure Location Zone" name="structureLocationZone">
                                                    <StructureLocationZone />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.latrineType} label="Household Latrine" name="latrineType">
                                                    <HouseholdLatrine />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.isVulnerableHousehold} label="Vulnerable Household?" name="isVulnerableHousehold">
                                                    <IsVulnerable />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.isPoorHousehold} label="Poor Household?" name="isPoorHousehold">
                                                    <IsPoor />
                                                </CustomSelectInput>
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.willHouseholdPayFullForOSS} label="Pay Full for OSS?" name="willHouseholdPayFullForOSS">
                                                    <WillPayFull />
                                                </CustomSelectInput>
                                            </Form.Row>
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Registering household...' : 'Save Edited Household'}
                                            </Button>
                                            <Button variant="danger" type="submit">
                                                {props.isSubmitting ? 'Deleting household...' : 'Delete Household'}
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

export default BTEditElement