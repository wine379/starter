import {Row, Col, Breadcrumb, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, {useState, useCallback} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

//IMPORT COMPONETS
 import CustomSelectInput from '../../components/common/CustomSelectInput';
 import CustomTextInput  from '../../components/common/CustomTextInput';
 import AreaSelection from '../../components/common/AreaSelection';  

 // IMPORT STATE
 import useSystemAdminStore from '../../stores/useSystemAdminStore';

 import WardSelectionList from '../../components/common/WardSelectionList';
 
 import AverageMonthlyIncome from '../../components/common/AverageMonthlyIncome';  
 import HomeOwnership from '../../components/common/HomeOwnership';  
 import AgeCategorySelection from '../../components/common/AgeCategorySelection';  
 import HouseholdLatrine from '../../components/common/HouseholdLatrine';  
 import IsPoor from '../../components/common/IsPoor';  
 import IsVulnerable from '../../components/common/IsVulnerable';  
 import MainSourceOfLivelihood from '../../components/common/MainSourceOfLivelihood';  
 import StructureLocationZone from '../../components/common/StructureLocationZone';  
 import WillPayFull from '../../components/common/WillPayFull'; 




 const OSSWorksCompletionSearchElement = () => {
    const [field, setField] = useState([]);
    const [state, setValue] = useState({sideMenu: true});

    const _onSideMenu = (active) => {
        setState({sideMenu: active});
    }
    return (
        <>
            <Formik
                initialValues={{  
                    ward: '',
                    area: '',
                    blockName: '',
                    serviceCategory: '',
                    techChoice: '',
                    progressRate: '',
                  
                   

                }}
                validationSchema = {Yup.object({

                    ward: Yup. string()
                        .required('Required'),
                    area: Yup.string()
                        .required('Required'),
                    blockName: Yup.string()
                        .required('Required'),
                    serviceCategory: Yup.string()
                        .required('Required'),
                    techChoice: Yup.string()
                        .required('Required'),
                    progressRate: Yup.string()
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
                        <div className="page-wrapper">
                        <Row>
                            <Col xl={12}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="card-header">     
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>HH Search Parameters</b></h5>
                                        </div>
                                       

                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>
                                                
                                                <CustomSelectInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.ward} label="Ward" name="ward">
                                                    <WardSelectionList />
                                                </CustomSelectInput>
                                                <CustomSelectInput label="Area" name="area">
                                                    <AreaSelection />
                                                </CustomSelectInput>

                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.blockName} placeholder="Enter Block Name" label="Block Name" name="blockName"/>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.serviceCategory} placeholder="Enter Service Category" label="Service Category" name="serviceCategory"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.techChoice} placeholder="Enter Tech Choice" label="Tech Choice" name="techChoice"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.progressRate} placeholder="Enter Progress Rate" label="Progress Rate" name="progressRate"/>
                                            
                                            </Form.Row>

                                           
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Submit ...' : 'Submit'}
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

export default OSSWorksCompletionSearchElement





// import React, {useState} from 'react';
// import {Row, Col, Form} from 'react-bootstrap';

// const OSSWorksCompletionSearchElement = () => {
//     const [sideMenuState, setSideMenuState] = useState({sideMenu: true});

//     const _onSideMenu = (active) => {
//     setSideMenuState({sideMenu: active});
//     }
//     return (
    
// <Row>
//    <Col xl={12}>
//        <div className="card mb-4">
//            <div className="card-body">
//                <div className="card-header">
//                    <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>HH Search Parameters</b></h8></h8>
//                </div>

//                <Form>
//                    <Form.Row>
//                         <Form.Group as={Col} controlId="Ward">
//                            <Form.Label>Ward</Form.Label>
//                            <Form.Control as="select">
//                                <option>Select Ward...</option>
//                                <option>...</option>
//                            </Form.Control>
//                        </Form.Group>
//                         <Form.Group as={Col} controlId="area">
//                            <Form.Label>City Area</Form.Label>
//                            <Form.Control as="select">
//                                <option>Select Area...</option>
//                                <option>...</option>
//                            </Form.Control>
//                        </Form.Group>

//                        <Form.Group as={Col} controlId="block">
//                            <Form.Label>Block</Form.Label>
//                            <Form.Control as="select">
//                                <option>Select Block...</option>
//                                <option>...</option>
//                            </Form.Control>
//                        </Form.Group>
//                        <Form.Group as={Col} controlId="ServiceCat">
//                            <Form.Label>Service Category</Form.Label>
//                            <Form.Control as="select">
//                                <option>New </option>
//                                <option>Rehabilitation</option>
//                            </Form.Control>
//                        </Form.Group> 
//                        <Form.Group as={Col} controlId="tech-choice">
//                            <Form.Label>Technology Choice</Form.Label>
//                            <Form.Control as="select">
//                                <option>Single VIP Toilet </option>
//                                <option>Twin VIP Toilet</option>
//                                <option>Por FLASH Toilet</option>
//                                <option>Septic Tank</option>
//                            </Form.Control>   
//                        </Form.Group>
//                        <Form.Group as={Col} controlId="WorksProgress">
//                            <Form.Label>Progress Rate</Form.Label>
//                            <Form.Control as="select">
//                                <option>Select Progress Rate...</option>
//                                <option>...</option>
//                            </Form.Control>
//                        </Form.Group>
                                     
//                    </Form.Row>
//                </Form>
//            </div>
//        </div>
//    </Col>
// </Row>
//     )
// }

// export default OSSWorksCompletionSearchElement
