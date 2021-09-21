import React, {useState, useCallback, useEffect} from 'react'
import {Row, Col, Table, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
// IMPORTING STATE AND ELEMENTS

import useBeneficiaryStore from '../../stores/useBeneficiaryStore';
import Loader from '../common/Loader';

const BeneficiarySelectedTechnologyElement = () => {
    const [state, setState] = useState({ sideMenu: true});
    const _onSideMenu = (active) => {
        setState({sideMenu: active});
    }
    // STATE

    const beneficiaries = useBeneficiaryStore(useCallback(state => state.beneficiaries));
    const beneficiariesLoading = useBeneficiaryStore(useCallback(state => state.beneficiariesLoading));
    const beneficiariesError = useBeneficiaryStore(useCallback(state => state.beneficiariesError));
    const fetchBeneficiaries = useBeneficiaryStore(useCallback(state => state.fetchBeneficiaries));

    useEffect(() => { // FETCHING REGISTEDHOUSEHOLDS FROM DATABASE
        fetchBeneficiaries();
    }, []);
    {beneficiariesLoading && <Loader /> }
    {<span>Error: </span> && beneficiariesError }

    return (
        <div className="page-wrapper">
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                            
                                <h5 className="card-title" style={{ color: 'blue' }}><b>Households' Selected Technologies</b></h5>
                            </div>
                            
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>City</th>
                                        <th>Area</th>
                                        <th>Block</th>
                                        <th>HH Ref No.</th>
                                        <th>HH Name</th>
                                        <th>Contact No.</th>
                                        <th>Selected Technology</th>
                                        <th>Action</th>
                                        <th>Assessed/Verified</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {beneficiaries.map((household, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>Lilongwe</td>
                                        {household.areas.map((area, i) =>(<td key={i}>{area.area_name}</td>))}
                                        <td>{household.household_block_name}</td>
                                        <td>{household.household_code}</td>
                                        <td>{household.household_name}</td>
                                        {household.phones.map((phone, i)=>(<td key={i}>{phone.phone}</td>))}
                                        <td>//NOT IMPLEMENTED</td>
                                        <td>
                                            <Link to="/"> Verify/Approve </Link>
                                        </td>
                                        <td> 
                                            <input type="checkbox">
                                            </input>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* End Basic Table */}
        </div>  
    )
}

export default BeneficiarySelectedTechnologyElement
