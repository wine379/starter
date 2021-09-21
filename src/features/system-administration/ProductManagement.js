import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddProductElement from '../../components/system-administration/AddProductElement';
import ProductsElement from '../../components/system-administration/ProductsElement';

const ProductManagement = () => {
    
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
                                    < AddProductElement /> 
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    {/* File path: */}
                                    < ProductsElement />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProductManagement
