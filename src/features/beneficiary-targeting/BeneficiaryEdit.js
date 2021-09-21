import React, {useState} from 'react';
import { Row, Col, Breadcrumb, Tabs, Tab, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import BTEditElement from '../../components/beneficiary-targeting/BTEditElement';

const BeneficiaryEdit = () => {
    const [state, setState] = useState({sideMenu: true})
       
    const _onSideMenu = (active) => {
        setState({ sideMenu: active });
    }
    

    return (
        <div className="page-wrapper">
            {/* Navigation */}
            <Navigation onClick={_onSideMenu} />
            {/* End Navigation */}

            <div className={`main-content d-flex flex-column ${state.sideMenu ? '' : 'hide-sidemenu'}`}>
                {/* Breadcrumb */}
                <div className="main-content-header">
                    <Breadcrumb>
                        <h1>Edit/View Beneficiary</h1>
                    </Breadcrumb>
                </div>
                {/* End Breadcrumb */}
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
                                        <BTEditElement />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Footer  */}
                <div className="flex-grow-1"></div>
                <Footer />
                {/* End Footer  */}
            </div>
        </div>
    )
}

export default BeneficiaryEdit
