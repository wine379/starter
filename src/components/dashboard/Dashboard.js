import React from 'react';
import {Row, Col } from 'react-bootstrap';
import MonthlyTotalHouseholdsContributions from '../../components/dashboard/sales/MonthlyTotalHouseholdsContributions';
import TotalProductRequest from '../../components/dashboard/sales/TotalProductRequest';
import VerifiedRequests from '../../components/dashboard/sales/VerifiedRequests';
import PendingRequests from '../../components/dashboard/sales/PendingRequests';
import ProductSalesByArea from '../../components/dashboard/ProductSalesByArea';
import TrendingOSSProduct from '../../components/dashboard/TrendingOSSProduct';

const Dashboard = () => {

    return (
        <>
            <Row>
                <Col sm={6} lg={3}>
                    {/* File path: src/components/dashboard/Sales/MonthlySales.js */}
                    <MonthlyTotalHouseholdsContributions />
                </Col>
                <Col sm={6} lg={3}>
                    {/* File path: src/components/dashboard/Sales/TotalOrders.js */}
                    <TotalProductRequest />
                </Col>
                <Col sm={6} lg={3}>
                    {/* File path: src/components/dashboard/Sales/CompletedOrders.js */}
                    <VerifiedRequests />
                </Col>
                <Col sm={6} lg={3}>
                    {/* File path: src/components/dashboard/Sales/PendingOrders.js */}
                    <PendingRequests />
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                    {/* File path: src/components/dashboard/SalesByCountries.js */}
                    <ProductSalesByArea />
                </Col>
                <Col lg={7}>
                    {/* File path: src/components/dashboard/TrendingProduct.js */}
                    <TrendingOSSProduct />
                </Col>        
            </Row>
        </>

    )
}

export default Dashboard
