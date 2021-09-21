import React, {useState} from 'react';
import {Row, Col, Breadcrumb, Image} from 'react-bootstrap';
import SVIPModal from '../../components/request-for-service/SVIPModal'
import SVIPModal2 from '../../components/request-for-service/SVIPModal2'
import TwinVIPModal2 from '../../components/request-for-service/TwinVIPModal2';
import TwinVIPModal1 from '../../components/request-for-service/TwinVIPModal1';
import PourFlashModal2 from '../../components/request-for-service/PourFlashModal2';
import PourFlashModal1 from '../../components/request-for-service/PourFlashModal1';

const OSSModalProducts = () => {
    const [state, setState] = useState({ sideMenu: true});
    const _onSideMenu = (active) => {
        setState({sideMenu: active});
    }
    return (
        <Col xl={12}>
                
            <div className="card-body">
                <div className="card-header">
                    <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Available OSS Products</b></h8></h8>
                </div>

                <Row>
                    {/* Basic Modal */}
                    <Col lg={4}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-header">
                                    <h5 className="card-title">Single VIP Toilet 1</h5>
                                </div>

                                {/* File path: src/pages/UI-Components/BasicModal.js */}
                                <SVIPModal  />
                            </div>
                        </div>
                    </Col>
                    {/* End Basic Modal */}

                    {/* Vertically Centered Modal */}
                    <Col lg={4}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-header">
                                    <h5 className="card-title">Single VIP Toilet 2</h5>
                                </div>

                                {/* File path: src/pages/UI-Components/BasicModal.js */}
                                <SVIPModal2  />
                            </div>
                        </div>
                    </Col>
                    {/* End Vertically Centered Modal */}

                    {/* Modal With Grid */}
                    <Col xl={4}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-header">
                                    <h5 className="card-title">Twin VIP Toilet 1</h5>
                                </div>

                                {/* File path: src/pages/UI-Components/BasicModal.js */}
                                <TwinVIPModal1  />
                            </div>
                        </div>
                    </Col>
                    {/* End Modal With Grid */}
                </Row>
                <Row>
                    {/* Small And Large Modal */}
                    <Col xl={4}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-header">
                                    <h5 className="card-title">Twin VIP Toilet 2</h5>
                                </div>

                                {/* File path: src/pages/UI-Components/BasicModal.js */}
                                <TwinVIPModal2  />
                            </div>
                        </div>
                    </Col>
                    {/* End Small And Large Modal */}

                    {/* Custom Modal */}
                    <Col xl={4}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-header">
                                    <h5 className="card-title">Pour Flash Toilet 1</h5>
                                </div>

                                {/* File path: src/pages/UI-Components/BasicModal.js */}
                                <PourFlashModal1/>
                            </div>
                        </div>
                    </Col>
                    {/* End Custom Modal */}
                    <Col xl={4}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-header">
                                    <h5 className="card-title">Pour Flash Toilet 2</h5>
                                </div>

                                {/* File path: src/pages/UI-Components/BasicModal.js */}
                                <PourFlashModal2  />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div> 
        </Col>  
    )
}

export default OSSModalProducts
