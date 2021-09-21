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




 const AreaSearchElement = () => {
    const [field, setField] = useState([]);
    const [state, setValue] = useState({sideMenu: true});

    const _onSideMenu = (active) => {
        setState({sideMenu: active});
    }
    return (
        <>
            <Formik
                initialValues={{  
                    houseCode: '',
                    caseCategory: '',
                    complaintRecipient: '',
                    complaint: '',
                    
                  
                   

                }}
                validationSchema = {Yup.object({

                    houseCode: Yup.string()
                        .required('Required'),
                    caseCategory: Yup.string()
                        .required('Required'),
                    complaintRecipient: Yup.string()
                        .required('Required'),
                    complaint: Yup.string()
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
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Case Register</b></h5>
                                        </div>
                                       

                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>
                                                
                                            <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.houseCode} placeholder="Enter House Code" label="House Code" name="houseCode"/>
                                            <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.caseCategory} placeholder="Enter Case Category" label="Case Category" name="caseCategory"/> 
                                            <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.complaintRecipient} placeholder="Enter Complaint Recipient" label="Complaint Recipient" name="complaintRecipient"/> 
                                            <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.complaintRecipient} placeholder="Enter Complaint" label="Complaint" name="complaint"/> 

                                            </Form.Row>

                                           
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Search...' : 'Submit'}
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

export default AreaSearchElement





// import React from 'react';
// import { Row, Col, Breadcrumb, Form, Button, ButtonToolbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";

// const CMaddcase = () => {
//     return (

//         <Row>
//             <Col xl={12}>
//                 <div className="card mb-4">
//                     <div className="card-body">
//                         <div className="card-header">
//                             <h5 className="card-title"></h5>
//                         </div>

//                         <Form>
//                             <Form.Row>
                                
                                
//                                 <Form.Group as={Col} controlId="plot">
//                                     <Form.Label>Household Code. </Form.Label>
//                                     <Form.Control type="text" placeholder="HH Code" />
//                                 </Form.Group> 
//                             </Form.Row>

//                             <Form.Row>
//                                 <Form.Group as={Col} controlId="ccategory">
//                                     <Form.Label>Case Category</Form.Label>
//                                     <Form.Control as="select">
//                                         <option>Select Category...</option>
//                                         <option> Beneficiary Registration</option>
//                                         <option> OSS Costs</option>
//                                         <option> Contractor</option>
//                                         <option> Work Progress</option>
//                                         <option> Supervision</option>
//                                     </Form.Control>
//                                 </Form.Group>
//                                 <Form.Group as={Col} controlId="addressee">
//                                     <Form.Label>Complaint Recepient</Form.Label>
//                                     <Form.Control as="select">
//                                         <option>Select Recepient...</option>
//                                         <option> Area Contractor</option>
//                                         <option> Lilongwe City Council</option>
//                                         <option> Lilongwe Water Board</option>
//                                     </Form.Control>
//                                 </Form.Group>
//                                 <Form.Group as={Col} controlId="complaint">
//                                     <Form.Label>Complaint</Form.Label>
//                                     <Form.Control type="text" placeholder="type complaint here" >
                                        
//                                     </Form.Control>
//                                 </Form.Group>
//                             </Form.Row>

//                             <ButtonToolbar >
//                                 <Button variant="outline-success" className="mt-2 mr-2">Register Case</Button>       
//                             </ButtonToolbar>
//                         </Form>
//                     </div>
//                 </div>
//             </Col>
//         </Row>
//     )
// }

// export default CMaddcase
