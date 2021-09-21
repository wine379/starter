import React from 'react';
import {Row, Col, Table, Button, ButtonToolbar} from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import Loader from '../common/Loader';

const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    Product {
      product_code
      product_description
      product_cost
      product_name
    }
  }
`;

const ProductsElement = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    return(
        <>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                            
                                <h5 className="card-title" style={{ color: 'blue' }}><b>Products/Services</b></h5>
                            </div>
                            
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product Name</th>
                                        <th>Description</th>
                                        <th>Cost</th>
                                        <th>Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.Product.map((product, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_description}</td>
                                            <td>{product.product_cost}</td>
                                            <td className="text-left">
                                                <ButtonToolbar>
                                                    <Button variant="primary" size="xs" className="mt-2 mr-2 rounded-0">
                                                        view/edit
                                                    </Button>
                                                    <Button variant="primary" size="xs" className="mt-2 mr-2">
                                                        Approve
                                                    </Button>
                                                </ButtonToolbar>  
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProductsElement
