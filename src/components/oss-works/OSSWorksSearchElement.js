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




 const OSSWorksSearchElement = () => {
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
                    plotNo: '',
                    hhRefNo: '',
                    serviceCategory: '',
                    techChoice: '',
                  
                   

                }}
                validationSchema = {Yup.object({

                    ward: Yup.string()
                        .required('Required'),
                    area: Yup.string()
                        .required('Required'),
                    blockName: Yup.string()
                        .required('Required'),
                    hhRefNo: Yup.string()
                        .required('Required'),
                    plotNo: Yup.string()
                        .required('Required'),
                    hhRefNo: Yup.string()
                        .required('Required'),
                    serviceCategory: Yup.string()
                        .required('Required'),
                    techChoice: Yup.string()
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
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.phoneNumber} placeholder="Enter Plot number" label="Plot number" name="plotNo"/>
                                            </Form.Row>
                                            <Form.Row>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.hhRefNo} placeholder="Enter HH Ref" label="HH Ref No" name="hhRefNo"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.serviceCategory} placeholder="Enter Service Category" label="Service Category" name="serviceCategory"/>
                                                <CustomTextInput onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.techChoice} placeholder="Enter Tech Choice" label="Tech Choice" name="techChoice"/>

                                            
                                            </Form.Row>

                                           
                                            <Button variant="primary" type="submit">
                                                {props.isSubmitting ? 'Search...' : 'Search'}
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

export default OSSWorksSearchElement

