import React from 'react';
import { useQuery } from '@apollo/client';
import { Row, Col, Table, Form} from 'react-bootstrap';
import * as Icon from 'react-feather';


//IMPORTING COMPONENTS
import Loader from '../common/Loader';
import * as Constants from '../../constants/AppConstants';
import { checkedListAllVar, householdsCheckedVar } from '../../util/appCache';
import CustomCheckbox from '../common/CustomCheckbox';

const PendingHouseholdsElement = () => {
    const { data: householdsData, loading: householdsLoading, error: householdsError } = useQuery(Constants.GET_NEW_HOUSEHOLDS_QUERY);
    const { data: checkedListAllData, loading: checkedListAllLoading, error: checkedListAllError } = useQuery(Constants.GET_CHECKED_LIST_ALL_QUERY);
    const { data: householdsCheckedData, loading: householdsCheckedLoading, error: householdsCheckedError } = useQuery(Constants.GET_HOUSEHOLDS_CHECKED_QUERY);

    if (householdsLoading) return <Loader />;
    if (householdsError) return `Error! ${error.message}`;

    const resultData = householdsData;
    const newHouseholds = resultData.newHouseholds;
    const householdsChecked = householdsCheckedData.householdsChecked;
    const checkedList = checkedListAllData.checkedListAll;


  console.log(checkedListAllVar())

    const selectedItems = (e) => {
        const { value, checked } = e.target;

        if (checked) {
          checkedListAllVar([...checkedListAll(), value]);
        } else {
          checkedListAllVar(checkedList.filter(el => el !== value));
          if (householdsChecked) {
            householdsCheckedVar(!!!householdsChecked);
        }
      }
    }
    const  selectItem = (e) => {
        const { checked, value } = e.target;

        checkedListAll([value]);
        householdsCheckedVar(checked);
    }
    const handleCheckboxClick = (e) => {
        e.preventDefault();

        const { value, checked } = e.target;
    
        if (checked) {
            checkedListAll([...checkedListAll(), value]);
        } else {
            checkedListAllVar(checkedList.filter(item => item != value));
        }
      }
      const handleSelected = (e) => {
        e.preventDefault();
        let collection = [];
        const emptyCollection = [];

        const { checked } = e.target;
        
        if(checked){
            newHouseholds.map((household)=>{
                collection.push(household.household_code);
            })
            checkedListAllVar(collection);
        }else{
            checkedListAllVar(emptyCollection);
        }
        
      }

      const listOfCheckedHouseholds = checkedListAllData.checkedListAll;

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
                                    <th><Form.Check 
                                        onChange={handleSelected} 
                                        type="checkbox"
                                        checked={ItemsChecked}
                                        onClick={this.selectItem.bind(this)}
                                        /></th>
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
                                        <th>
                                            <CustomCheckbox 
                                                household={household}
                                                selectedItems={selectedItems}
                                                isChecked={listOfCheckedHouseholds.includes(household.household_code)}
                                                handleSelected={handleSelected}
                                            />
                                        </th>
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

export default PendingHouseholdsElement
