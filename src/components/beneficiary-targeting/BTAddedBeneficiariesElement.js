import React, {useCallback, useEffect} from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Table, Form} from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';
import * as Icon from 'react-feather';

//IMPORTING COMPONENTS
import Loader from '../common/Loader';
import * as Constants from '../../constants/AppConstants';
import { selectAllVar } from '../../util/appCache';



const BTAddedBeneficiariesElement = () => {
    const { data: householdsData, loading: householdsLoading, error: householdsError } = useQuery(Constants.GET_NEW_HOUSEHOLDS_QUERY);
    const { data: selectAllData, loading: selectAllLoading, error: selectAllError } = useQuery(Constants.GET_SELECT_ALL_QUERY);

  if (householdsLoading) return <Loader />;
  if (householdsError) return `Error! ${error.message}`;

  const resultData = householdsData;
  const newHouseholds = resultData.newHouseholds;

  let selectionState = selectAllData.selectAll;

  const handleSelected = () => {
      const isSelected = selectAllData.selectAll
      selectAllVar(!!!isSelected)
    }

  const handleApprove = (e) => {
    e.preventDefault()
      console.log("Approved");
    }
  const handleReject = (e) => {
    e.preventDefault()
      console.log("Reject");
    }
    const handleView = (e) => {
        e.preventDefault()
        console.log("View");
        }
    const handleDelete = (e) => {
        e.preventDefault()
            console.log("Delete");
            }

    return(
        <Row>
            <Col xl={12}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title">Added Beneficiary List</h5>
                        </div>
                        <Table responsive hover className="m-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><Form.Check onChange={handleSelected} /></th>
                                    <th>Area</th>
                                    <th>Block</th>
                                    <th>HH Ref No.</th>
                                    <th>HH Name</th>
                                    <th>Contact No.</th>
                                    <th>Erollment Status</th>
                                    <th className="text-center">Action</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {newHouseholds.map((household, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <th><Form.Check  checked={selectionState} onChange={handleSelected} /></th>
                                        <td>{household.area}</td>
                                        <td>{household.household_block_name}</td>
                                        <td>{household.household_code}</td>
                                        {household.users.map((user, i) =>(<td key={i}>{user.full_name}</td>))}
                                        <td>{household.phone}</td>
                                        <td>{household.enrollment_status}</td>
                                        <td>
                                            <a href="#" onClick= {handleApprove} >
                                                <Icon.CheckCircle className="icon mr-1" />
                                            </a>
                                            <a href="#" onClick= {handleReject}>
                                                <Icon.XCircle className="icon mr-1" />
                                            </a>
                                            <a href="#" onClick= {handleView} >
                                                <Icon.Eye className="icon mr-1" />
                                            </a>
                                            <a href="#" onClick= {handleDelete}>
                                                <Icon.Trash className="icon" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default BTAddedBeneficiariesElement
