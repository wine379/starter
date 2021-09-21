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




 const WorksProgressDateElement = () => {
    const [field, setField] = useState([]);
    const [state, setValue] = useState({sideMenu: true});

    const _onSideMenu = (active) => {
        setState({sideMenu: active});
    }
    return (
        <>
            <Formik
                initialValues={{  
                    worksProgress: '',
                    dateOfRecord: '',
                  
                   

                }}
                validationSchema = {Yup.object({

                    worksProgress: Yup.string()
                        .required('Required'),
                    dateOfRecord: Yup.string()
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
                                            <h5 className="card-title" style={{ color: 'blue' }}><b>Works Progress and Record Date</b></h5>
                                        </div>
                                       

                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Row>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.worksProgress} placeholder="EnterWorks Progress" label="Works Progress" name="worksProgress"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.dateOfRecord} placeholder="Enter Date Of Record" label="Date Of Record" name="dateOfRecord"/>
                                            
                                            </Form.Row>

                                           
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Submit Project Progress...' : 'Submit Project Progress'}
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

export default WorksProgressDateElement




// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import {Row, Col, Form} from 'react-bootstrap';

// const WorksProgressDateElement = () => {
//   const [state, setState] = useState({ startDate: new Date()});
//   const handleChange = (date) => {setState({ startDate: date})}
//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(state.startDate)
//   }
//   return (
//     <div className="page-wrapper">
//         <div className="card mb-4">
//            <div className="card-body">
//                <div className="card-header">
//                    <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Works Progress and Record Date</b></h8></h8>
//                </div>
//                <Form.Row>
//                     <Col xl={3}>
//                         <Form.Group as={Col} controlId="Ward">
//                             <Form.Label>Works Progress</Form.Label>
//                             <Form.Control form-control-sm as="select">
//                                 <option>Select Progress Rate...</option>
//                                 <option>20</option>
//                                 <option>40</option>
//                                 <option>50</option>
//                                 <option>75</option>
//                                 <option>90</option>
//                                 <option>100</option>
//                             </Form.Control>
//                         </Form.Group>
//                     </Col>
//                     <Col xl={3}>
//                         Date Of Record

//                         <form onSubmit={ onFormSubmit }>
//                             <div className="form-group">
//                                 <DatePicker
//                                     selected={ state.startDate }
//                                     onChange={ handleChange }
//                                     name="startDate"
//                                     dateFormat="MM/dd/yyyy"
//                             />
//                                 </div>
                                    
//                                 <div>
//                             </div>
//                         </form>
                        
//                     </Col>
//                     <Col xl={3}>
//                         <button className="btn btn-primary">Submit Project Progress</button>
//                     </Col>
//                 </Form.Row>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default WorksProgressDateElement;
