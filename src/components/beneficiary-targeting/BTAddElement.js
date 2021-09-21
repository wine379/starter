import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { gql, useQuery, useMutation } from '@apollo/client';

//IMPORTING COMPONENTS

import WardSelectionList from '../../components/common/WardSelectionList';
import AreaSelection from '../../components/common/AreaSelection';  
import AverageMonthlyIncome from '../../components/common/AverageMonthlyIncome';  
import HomeOwnership from '../../components/common/HomeOwnership';  
import HouseholdLatrine from '../../components/common/HouseholdLatrine';  
import IsPoor from '../../components/common/IsPoor';  
import IsVulnerable from '../../components/common/IsVulnerable';  
import MainSourceOfLivelihood from '../../components/common/MainSourceOfLivelihood';  
import StructureLocationZone from '../../components/common/StructureLocationZone';  
import WillPayFull from '../../components/common/WillPayFull'; 
import CustomTextInput  from '../../components/common/CustomTextInput';
import CustomSelectInput  from '../../components/common/CustomSelectInput';

const GET_USER_WITH_NATIONAL_ID = gql`
    query GetUserWithNationalId($nationalID: String!){
        User(national_id: $nationalID) {
                national_id
            }
    }
`;


const CREATE_BENEFICIARY_QUERY = gql`
  mutation CreateHousehold(
  $ward: ID!
  $area: ID!
  $monthlyIncomeRange: ID!
  $homeOwnershipCategory: ID!
  $latrineType: ID!
  $mainSourceOfLivelihood: ID!
  $structureLocationZone: ID!
  $blockName: String!
  $plotNumber: String!
  $phoneNumber: String!
  $householdHeadNationalID: String!
  $isPoorHousehold: String!
  $isVulnerableHousehold: String!
  $willHouseholdPayFullForOSS: String!
  $householdCode: String!
  $householdAdminNote: String!

  ){
    createBeneficiary(
      householdPhone: $phoneNumber
      householdCode: $householdCode
      householdAdminNote: $householdAdminNote
      blockName: $blockName
      plotNumber: $plotNumber
      householdHeadNationalID: $householdHeadNationalID
      isPoor: $isPoorHousehold
      isVulnerable: $isVulnerableHousehold
      willPayInFull: $willHouseholdPayFullForOSS
      area : $area
      avarageMonthlyIncomes : $monthlyIncomeRange
      homeOwnershipCategories : $homeOwnershipCategory
      latrine : $latrineType
      mainSourceOfLivelihoodCategory : $mainSourceOfLivelihood
      structureLocationZones : $structureLocationZone
      ward : $ward
   ){
    household_code
   }
  }
`;

const BTAddElement = () => {
    const [addHousehold, { data, loading, error }] = useMutation(CREATE_BENEFICIARY_QUERY);
    const verifyNationalID = (nationalID)=> {
        const { loading, error, data } = useQuery(GET_USER_WITH_NATIONAL_ID, {
            variables: { national_id: nationalID},
          });

    }
    return (
        <>
            <Formik
                initialValues={
                      {
                        ward: '',
                        area: '',
                        monthlyIncomeRange: '',
                        homeOwnershipCategory: '',
                        latrineType: '',
                        mainSourceOfLivelihood: '',
                        structureLocationZone: '',
                        blockName: '',
                        plotNumber: '',
                        phoneNumber: '',
                        householdHeadNationalID: '',
                        isPoorHousehold: '',
                        isVulnerableHousehold: '',
                        willHouseholdPayFullForOSS: '',
                        householdCode: '',
                        householdAdminNote: '',
                    }
                }
                validationSchema = {Yup.object({
                    ward: Yup.string().required('Required'),
                    area: Yup.string().required('Required'),
                    monthlyIncomeRange: Yup.string().required('Required'),
                    homeOwnershipCategory: Yup.string().required('Required'),
                    latrineType: Yup.string().required('Required'),
                    mainSourceOfLivelihood: Yup.string().required('Required'),
                    structureLocationZone: Yup.string().required('Required'),
                    blockName: Yup.string().required('Required'),
                    plotNumber: Yup.string().required('Required'),
                    phoneNumber: Yup.string()
                        .min(10, "Must have a minimum of 10 digits")
                        .matches(/^[0-9]+$/, "Must be only digits")
                        .required('Required'),
                    householdHeadNationalID: Yup.string().required('Required'),
                    isPoorHousehold: Yup.string()
                        .oneOf(["YES", "NO"])
                        .required('Required'),
                    isVulnerableHousehold: Yup.string()
                        .oneOf(["YES", "NO"])
                        .required('Required'),
                    willHouseholdPayFullForOSS: Yup.string()
                        .oneOf(["YES", "NO"])
                        .required('Required'),
                    householdCode: Yup.string(),
                    householdAdminNote: Yup.string(),
                })}
                validator={() => ({})}
                onSubmit={(values, actions) => {
                    const code = Date.now().toString(16).toUpperCase();
                    const creationDate = Date();
                    let note = "This household was created on ";
                    let householdCode = "HH-";
                    

                    householdCode += code;
                    note += creationDate;
                    values.householdCode = householdCode;
                    values.householdAdminNote = note;

                    

                    // if(!idData){
                    //     console.log('id not found')
                    // }

                    addHousehold({ 
                        variables: { 
                            ward: values.ward,
                            area: values.area,
                            monthlyIncomeRange: values.monthlyIncomeRange,
                            homeOwnershipCategory: values.homeOwnershipCategory,
                            latrineType: values.latrineType,
                            mainSourceOfLivelihood: values.mainSourceOfLivelihood,
                            structureLocationZone: values.structureLocationZone,
                            blockName: values.blockName,
                            plotNumber: values.plotNumber,
                            phoneNumber: values.phoneNumber,
                            householdHeadNationalID: values.householdHeadNationalID,
                            isPoorHousehold: values.isPoorHousehold,
                            isVulnerableHousehold: values.isVulnerableHousehold,
                            willHouseholdPayFullForOSS: values.willHouseholdPayFullForOSS,
                            householdCode: values.householdCode,
                            householdAdminNote: values.householdAdminNote
                        } ,
                        refetchQueries: [{query: GetBeneficiaries}]
                    });
                    
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 3000);
                    }
                }
                validator={() => ({})}
            >
                {props => (
                        <div className="page-wrapper">
                        <Row>
                            <Col xl={12}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="card-header">     
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Add Beneficiary Household</b></h5>
                                        </div>
                                        <Form onSubmit={props.handleSubmit}>    
                                            <Form.Row>  
                                                <Form.Group as={Col} controlId="ward">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Ward" name="ward">
                                                        <WardSelectionList />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="area">
                                                    <CustomSelectInput label="Area" name="area">
                                                        <AreaSelection />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="location-zone">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.structureLocationZone} label="Structure Location Zone" name="structureLocationZone">
                                                        <StructureLocationZone />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} >
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.blockName}  placeholder="Enter block name" label="Block name" name="blockName"/>  
                                                </Form.Group>  
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} >
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.plotNumber} placeholder="Enter plot number" label="Plot number" name="plotNumber"/>
                                                </Form.Group>
                                                <Form.Group as={Col} >
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter phone number" label="Phone number" name="phoneNumber"/>   
                                                </Form.Group>
                                                <Form.Group as={Col} >
                                                    <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdHeadNationalID} placeholder="Enter national ID" label="Head national ID" name="householdHeadNationalID"/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="livelihood">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.mainSourceOfLivelihood} label="Main Livelihood" name="mainSourceOfLivelihood">
                                                        <MainSourceOfLivelihood />
                                                    </CustomSelectInput>  
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="income">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.monthlyIncomeRange} label="Average Monthly Income" name="monthlyIncomeRange">
                                                        <AverageMonthlyIncome />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="home-ownership">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.homeOwnershipCategory} label="Home Ownership Status" name="homeOwnershipCategory">
                                                        <HomeOwnership />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="latrine">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.latrineType} label="Household Latrine" name="latrineType">
                                                        <HouseholdLatrine />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="vulerability">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.isVulnerableHousehold} label="Vulnerable Household?" name="isVulnerableHousehold">
                                                        <IsVulnerable />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="poverty">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.isPoorHousehold} label="Poor Household?" name="isPoorHousehold">
                                                        <IsPoor />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="payment">
                                                    <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.willHouseholdPayFullForOSS} label="Pay Full for OSS?" name="willHouseholdPayFullForOSS">
                                                        <WillPayFull />
                                                    </CustomSelectInput>
                                                </Form.Group>
                                            </Form.Row>
                                            <Button variant="primary" type="submit">
                                            {props.isSubmitting ? 'Registering household...' : 'Register household'}
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

export default BTAddElement

// import React, {useCallback} from 'react';
// import { Row, Col, Form, Button } from 'react-bootstrap';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import { gql, useMutation } from '@apollo/client';

// //IMPORTING COMPONENTS

// import WardSelectionList from '../../components/common/WardSelectionList';
// import AreaSelection from '../../components/common/AreaSelection';  
// import AverageMonthlyIncome from '../../components/common/AverageMonthlyIncome';  
// import HomeOwnership from '../../components/common/HomeOwnership';  
// import HouseholdLatrine from '../../components/common/HouseholdLatrine';  
// import IsPoor from '../../components/common/IsPoor';  
// import IsVulnerable from '../../components/common/IsVulnerable';  
// import MainSourceOfLivelihood from '../../components/common/MainSourceOfLivelihood';  
// import StructureLocationZone from '../../components/common/StructureLocationZone';  
// import WillPayFull from '../../components/common/WillPayFull'; 
// import CustomTextInput  from '../../components/common/CustomTextInput';
// import CustomSelectInput  from '../../components/common/CustomSelectInput';

// const CREATE_BENEFICIARY_QUERY = gql`
//   mutation CreateHousehold(
//   $ward: ID!
//   $area: ID!
//   $monthlyIncomeRange: ID!
//   $homeOwnershipCategory: ID!
//   $latrineType: ID!
//   $mainSourceOfLivelihood: ID!
//   $structureLocationZone: ID!
//   $blockName: String!
//   $plotNumber: String!
//   $phoneNumber: String!
//   $householdHeadNationalID: String!
//   $isPoorHousehold: String!
//   $isVulnerableHousehold: String!
//   $willHouseholdPayFullForOSS: String!
//   $householdCode: String!
//   $householdAdminNote: String!

//   ){
//     createBeneficiary(
//       householdPhone: $phoneNumber
//       householdCode: $householdCode
//       householdAdminNote: $householdAdminNote
//       blockName: $blockName
//       plotNumber: $plotNumber
//       householdHeadNationalID: $householdHeadNationalID
//       isPoor: $isPoorHousehold
//       isVulnerable: $isVulnerableHousehold
//       willPayInFull: $willHouseholdPayFullForOSS
//       area : $area
//       avarageMonthlyIncomes : $monthlyIncomeRange
//       homeOwnershipCategories : $homeOwnershipCategory
//       latrine : $latrineType
//       mainSourceOfLivelihoodCategory : $mainSourceOfLivelihood
//       structureLocationZones : $structureLocationZone
//       ward : $ward
//    ){
//     household_code
//    }
//   }
// `;

// const BTAddElement = () => {
    // const [addHousehold, { data, loading, error }] = useMutation(CREATE_BENEFICIARY_QUERY);

//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     ward: '',
//                     area: '',
//                     ageCategory: '',
//                     monthlyIncomeRange: '',
//                     homeOwnershipCategory: '',
//                     latrineType: '',
//                     mainSourceOfLivelihood: '',
//                     structureLocationZone: '',
//                     blockName: '',
//                     plotNumber: '',
//                     phoneNumber: '',
//                     householdHeadNationalID: '',
//                     isPoorHousehold: '',
//                     isVulnerableHousehold: '',
//                     willHouseholdPayFullForOSS: '',
//                 }}
//                 validationSchema = {Yup.object({
//                     ward: Yup.string()
//                         .required('Required'),
//                     area: Yup.string()
//                         .required('Required'),
//                     ageCategory: Yup.string()
//                         .required('Required'),
//                     monthlyIncomeRange: Yup.string()
//                         .required('Required'),
//                     homeOwnershipCategory: Yup.string()
//                         .required('Required'),
//                     latrineType: Yup.string()
//                         .required('Required'),
//                     mainSourceOfLivelihood: Yup.string()
//                         .required('Required'),
//                     structureLocationZone: Yup.string()
//                         .required('Required'),
//                     blockName: Yup.string().required('Required'),
//                     plotNumber: Yup.string().required('Required'),
//                     phoneNumber: Yup.string()
//                         .min(10, "Must have a minimum of 10 digits")
//                         .matches(/^[0-9]+$/, "Must be only digits")
//                         .required('Required'),
//                     householdHeadNationalID: Yup.string().required('Required'),
//                     isPoorHousehold: Yup.string()
//                         .oneOf(["YES", "NO"])
//                         .required('Required'),
//                     isVulnerableHousehold: Yup.string()
                        // .oneOf(["YES", "NO"])
                        // .required('Required'),
//                     willHouseholdPayFullForOSS: Yup.string()
//                         .oneOf(["YES", "NO"])
//                         .required('Required'),
//                 })}
//                 onSubmit={(values, actions) => {
//                     setTimeout(() => {
         
//                         alert(JSON.stringify(values, null, 2));
             
//                         actions.setSubmitting(false);
             
//                       }, 10000);
                    // const code = Date.now().toString(16).toUpperCase();
                    // const creationDate = Date();
                    // let note = "This household was created on ";
                    // let householdCode = "HH-";

                    // householdCode += code;
                    // note += creationDate;
                    // values.householdCode = householdCode;
                    // values.householdAdminNote = note;

                    // addHousehold({ variables: { 
                    //     ward: values.ward,
                    //     area: values.area,
                    //     monthlyIncomeRange: values.monthlyIncomeRange,
                    //     homeOwnershipCategory: values.homeOwnershipCategory,
                    //     latrineType: values.latrineType,
                    //     mainSourceOfLivelihood: values.mainSourceOfLivelihood,
                    //     structureLocationZone: values.structureLocationZone,
                    //     blockName: values.blockName,
                    //     plotNumber: values.plotNumber,
                    //     phoneNumber: values.phoneNumber,
                    //     householdHeadNationalID: values.householdHeadNationalID,
                    //     isPoorHousehold: values.isPoorHousehold,
                    //     isVulnerableHousehold: values.isVulnerableHousehold,
                    //     willHouseholdPayFullForOSS: values.willHouseholdPayFullForOSS,
                    //     householdCode: values.householdCode,
                    //     householdAdminNote: values.householdAdminNote
                    //  } });
                    
                    // setTimeout(() => {
                    //     actions.setSubmitting(false);
                    // }, 3000);
//                 }
//             }
//                 validator={() => ({})}
//                 >
//                     {props => (
//                         <Row>
//                             <Col xl={12}>
//                                     <div className="card mb-4">
//                                         <div className="card-body">
//                                             <div className="card-header">
//                                             <h5 className="card-title" style={{ color: 'blue' }}><b>Add Household</b></h5>
//                                             </div>
//                                             <Form onSubmit={props.handleSubmit}>
//                                                 <Form.Row>
                                                //     <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Ward" name="ward">
                                                //         <WardSelectionList />
                                                //     </CustomSelectInput>
                                                //     <CustomSelectInput label="Area" name="area">
                                                //         <AreaSelection />
                                                //     </CustomSelectInput>
                                                //     <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.structureLocationZone} label="Structure Location Zone" name="structureLocationZone">
                                                //         <StructureLocationZone />
                                                //     </CustomSelectInput>
                                                //     <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.blockName}  placeholder="Enter block name" label="Block name" name="blockName"/>
                                                //     <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.plotNumber} placeholder="Enter plot number" label="Plot number" name="plotNumber"/>
                                                // </Form.Row>
//                                                 <Form.Row>
                                                // <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter phone number" label="Phone number" name="phoneNumber"/>
                                                //     <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.householdHeadNationalID} placeholder="Enter head national ID" label="Head national ID" name="householdHeadNationalID"/>
                                                //     <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.mainSourceOfLivelihood} label="Main Livelihood" name="mainSourceOfLivelihood">
                                                //         <MainSourceOfLivelihood />
                                                //     </CustomSelectInput>
                                                //     <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.monthlyIncomeRange} label="Average Monthly Income" name="monthlyIncomeRange">
                                                //         <AverageMonthlyIncome />
                                                //     </CustomSelectInput>
                                                //     <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.homeOwnershipCategory} label="Home Ownership Status" name="homeOwnershipCategory">
                                                //         <HomeOwnership />
                                                //     </CustomSelectInput>
//                                                 </Form.Row>
//                                                 <Form.Row>
                                                    // <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.latrineType} label="Household Latrine" name="latrineType">
                                                    //     <HouseholdLatrine />
                                                    // </CustomSelectInput>
                                                    // <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.isVulnerableHousehold} label="Vulnerable Household?" name="isVulnerableHousehold">
                                                    //     <IsVulnerable />
                                                    // </CustomSelectInput>
                                                    // <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.isPoorHousehold} label="Poor Household?" name="isPoorHousehold">
                                                    //     <IsPoor />
                                                    // </CustomSelectInput>
                                                    // <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.willHouseholdPayFullForOSS} label="Pay Full for OSS?" name="willHouseholdPayFullForOSS">
                                                    //     <WillPayFull />
                                                    // </CustomSelectInput>
//                                                 </Form.Row>
//                                                 <Button variant="primary" type="submit">
//                                                     {props.isSubmitting ? 'Registering household...' : 'Register household'}
//                                                 </Button>
//                                             </Form>    
//                                         </div>
//                                     </div>
//                             </Col>
//                         </Row>   
//                     )}
//             </Formik>        
//         </>
//     )
// }

// export default BTAddElement