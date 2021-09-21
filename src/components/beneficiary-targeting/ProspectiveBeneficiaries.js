import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Button} from 'react-bootstrap';
import { useReactiveVar } from '@apollo/client';
import { householdsVar, householdSearchVariables, householdsSearchResults} from '../../util/appCache';

const householdsData = householdsVar();
const optionsData = householdSearchVariables();


const ProspectiveBeneficiaries = () => {
    const [households, setHouseholds] = useState(householdsVar());
    const [options, setOptions] = useState(householdSearchVariables());
    const [results, setResults] = useState(households);

    useEffect((options) => {
        if(options){
            const data = households.filter(w => w.ward == options.ward)
                                    .filter(a => a.area == options.area)
                                    .filter(h => h.household_code == options.householdCode)
                                    .filter(p => p.phone == options.phoneNumber)
            setResults(data)
        }

    }, [options]);

    return (
        <>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title">Beneficiary List</h5>
                            </div>
                            <Table responsive hover className="m-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Ward</th>
                                        <th>Area</th>
                                        <th>Block</th>
                                        <th>HH Ref No.</th>
                                        <th>HH Name</th>
                                        <th>Contact No.</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((household, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            {household.wards.map((ward, j) =>(<td key={j}>{ward.ward_name}</td>))}
                                            {household.areas.map((area, i) =>(<td key={i}>{area.area_name}</td>))}
                                            <td>{household.household_block_name}</td>
                                            <td>{household.household_code}</td>
                                            {household.users.map((user, i) =>(<td key={i}>{user.first_name + ' ' + user.last_name}</td>))}
                                            {household.phones.map((phone, j) =>(<td key={j}>{phone.phone}</td>))}
                                            <td>
                                                <Button variant="secondary">
                                                    More..
                                                </Button>
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

export default ProspectiveBeneficiaries
