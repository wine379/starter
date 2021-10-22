import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { FETCH_GROUPS_QUERY } from '../_utils/appConstants';
import { groupsVar, filteredGroupsVar } from '../_utils/appCache';


//IMPORT COMPONENTS
import HouseholdSearchElement from '../_common/HouseholdSearchElement';
import BasicLivelihoodProspectiveHouseholds from './BasicLivelihoodProspectiveHouseholds';
import BasicLivelihoodSensitizationRegistrationElement from './BasicLivelihoodSensitizationRegistrationElement';
import BasicLivelihoodSLGSearchElement from './BasicLivelihoodSLGSearchElement';
import BasicLivelihoodSLGElement from './BasicLivelihoodSLGElement';
import BasicLivelihoodSLGMembersElement from './BasicLivelihoodSLGMembersElement';
import BasicLivelihoodMindsetTrainingSearchElement from './BasicLivelihoodMindsetTrainingSearchElement';
import BasicLivelihoodMindsetTrainingElement from './BasicLivelihoodMindsetTrainingElement';
import BasicLivelihoodCBDRADistrictSearchElement from './BasicLivelihoodCBDRADistrictSearchElement';
import BasicLivelihoodCBDRADistrictElement from './BasicLivelihoodCBDRADistrictElement';
import BasicLivelihoodCBDRATOTRegistrationElement from './BasicLivelihoodCBDRATOTRegistrationElement';
import BasicLivelihoodCBDRATOTListElement from './BasicLivelihoodCBDRATOTListElement'
import BasicLivelihoodCBDRASearchElement from './BasicLivelihoodCBDRASearchElement';
import BasicLivelihoodCBDRASupportActivitiesElement from './BasicLivelihoodCBDRASupportActivitiesElement';
import BasicLivelihoodCBDRAAdoptPlaceSearchElement from './BasicLivelihoodCBDRAAdoptPlaceSearchElement';
import BasicLivelihoodCBDRATreePlantingSearchElement from './BasicLivelihoodCBDRATreePlantingSearchElement';
import BasicLivelihoodCBDRATreePlantingElement from './BasicLivelihoodCBDRATreePlantingElement';
import BasicLivelihoodWASHDistrictProblemsElement from './BasicLivelihoodWASHDistrictProblemsElement';
import BasicLivelihoodWASHPromotorElement from './BasicLivelihoodWASHPromotorElement';
import BasicLivelihoodWASHTOTElement from './BasicLivelihoodWASHTOTElement';
import BasicLivelihoodWASHMicroprojectsElement from './BasicLivelihoodWASHMicroprojectsElement';
import BasicLivelihoodACSAElement from './BasicLivelihoodACSAElement';
import BasicLivelihoodCBDRAAdoptaPlaceElement from './BasicLivelihoodCBDRAAdoptaPlaceElement';
import BasicLivelihoodSensitizationsElement from './BasicLivelihoodSensitizationsElement';
import Loader from '../components/common/Loader';

const BasicLivelihood = () => {
  const { data: groupsData, loading: groupsLoading, error: groupsError } = useQuery(FETCH_GROUPS_QUERY); 

  if (groupsLoading) return <Loader />;
  if (groupsError) return `Error! ${groupsError.message}`;

  groupsVar(groupsData);
  filteredGroupsVar(groupsData);

  return (
          <>
          <Row>
            <Col lg={12}>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="card-header">
                      <h5 className="card-title">Basic Livelihood</h5>
                  </div>

                  <div className="tabs-style-three">
                    <Tabs defaultActiveKey="awareness" id="uncontrolled-tab-example">

                    <Tab eventKey="awareness" title="Awareness & Sensitization">
                      <Row>
                        <Col lg={12}>
                          <BasicLivelihoodSensitizationRegistrationElement />
                        </Col> 
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <BasicLivelihoodSensitizationsElement />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="prospectives" title="Beneficiary Register">
                      <Row>
                        <Col lg={12}>
                          <HouseholdSearchElement />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                            <BasicLivelihoodProspectiveHouseholds />
                        </Col> 
                      </Row>
                    </Tab>
                    <Tab eventKey="sgl" title="SLG Mobilization">
                      <Row>
                        <Col lg={12}>
                          <HouseholdSearchElement />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <BasicLivelihoodProspectiveHouseholds />
                        </Col>
                      </Row>
                    </Tab>
                  <Tab eventKey="slg-mgt" title="SLG Mgt">
                    <Row>
                      <Col lg={12}>
                          <BasicLivelihoodSLGSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodSLGElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="ben-mgt" title="Member Mgt">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodSLGSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodSLGMembersElement />
                      </Col>                                                
                    </Row>
                  </Tab>
                  <Tab eventKey="mindset-trainings" title="Mindset Trainings">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodMindsetTrainingSearchElement />
                      </Col>      
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodMindsetTrainingElement />
                      </Col>    
                    </Row>
                  </Tab>
                  <Tab eventKey="disaster" title="Disaster Hotspots">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRADistrictSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRADistrictElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="CBDRAsensitization" title="CBDRA Sensitization">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRADistrictSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodSensitizationsElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="TOTs" title="TrainerOTrainers">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRATOTRegistrationElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRATOTListElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="clinics" title="Pyschosocial Clinics and Recovery Support">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRAAdoptPlaceSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRASupportActivitiesElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="adoptaplace" title="Adopt a Place">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRASearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRAAdoptaPlaceElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="treeplanting" title="National Tree Planting">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRATreePlantingSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRATreePlantingElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="home" title="District WASH Problems">
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodCBDRADistrictSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <BasicLivelihoodWASHDistrictProblemsElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="Promotors" title="Promotors">
                    <Row>
                      <Col lg={12}>
                          <BasicLivelihoodCBDRATreePlantingSearchElement />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                          <BasicLivelihoodWASHPromotorElement />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="training" title="Training">
                            <Row>
                              <Col lg={12}>
                                  <BasicLivelihoodCBDRATreePlantingSearchElement />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={12}>
                                  <BasicLivelihoodWASHTOTElement />
                              </Col>
                            </Row>
                          </Tab>
                          <Tab eventKey="microprojects" title="Microprojects">
                            <Row>
                              <Col lg={12}>
                                <BasicLivelihoodCBDRATreePlantingSearchElement />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={12}>
                                <BasicLivelihoodWASHMicroprojectsElement />
                              </Col>
                            </Row>
                          </Tab>
                          <Tab eventKey="acsa" title="ACSA">
                        <Row>
                          <Col lg={12}>
                            <BasicLivelihoodCBDRATreePlantingSearchElement />
                          </Col>
                        </Row>
                        <Row>
                          <Col xl={12}>
                            <div className="card mb-4">
                              <div className="card-body">
                                <Row>
                                  <Col lg={12}>
                                    <BasicLivelihoodACSAElement />
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab>

                      </Tabs>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          </>

        );
}

export default BasicLivelihood;
