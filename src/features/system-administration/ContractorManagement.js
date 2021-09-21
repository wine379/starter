import React, {useState} from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import AddContractorElement from '../../components/system-administration/AddContractorElement';
import ContractorsElement from '../../components/system-administration/ContractorsElement';

const ContractorManagement = () => {
    
    return (
        <>   
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title"></h5>
                            </div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    < AddContractorElement /> 
                                </Col>
                            </Row>
                        </div>
                        
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    < ContractorsElement  />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ContractorManagement
