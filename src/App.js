import React, {useState} from 'react'
import { Switch, Route} from 'react-router-dom';
import { householdsVar } from './util/appCache'
import { gql, useQuery } from '@apollo/client'

//IMPORT COMPONENTS

import Dashboard from './components/dashboard/Dashboard';
import ContractorManagement from './features/system-administration/ContractorManagement';
import ProductManagement from './features/system-administration/ProductManagement';
import UserManagement from './features/system-administration/UserManagement';
import BeneficiaryAdd from './features/beneficiary-targeting/BeneficiaryAdd';
import BeneficiaryRegister from './features/beneficiary-targeting/BeneficiaryRegister';
import TechnologyChoice from './features/request-for-service/TechnologyChoice';
import TechnologySelection from './features/request-for-service/TechnologySelection';
import TechnologyApproval from './features/request-for-service/TechnologyApproval';
import TechnologyCost from './features/request-for-service/TechnologyCost';
import TechnologyContribution from './features/contribute-for-oss/TechnologyContribution';
import ContractorAllocation from './features/oss-works/ContractorAllocation';
import WorksStart from './features/oss-works/WorksStart';
import WorksProgress from './features/oss-works/WorksProgress';
import WorksComplete from './features/oss-works/WorksComplete';
import HHProgress from './features/reports/HHProgress';
import AreaProgress from './features/reports/AreaProgress';
import CityProgress from './features/reports/CityProgress';
import CaseRegister from './features/case-management/CaseRegister';
import CaseStatus from './features/case-management/CaseStatus';
import ResolvedCases from './features/case-management/ResolvedCases';
import Loader from './components/common/Loader';
import * as Constants from './constants/AppConstants';

export default function App() {
  const { data, loading, error } = useQuery(Constants.FETCH_HOUSEHOLDS_QUERY);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const resultData = data

  householdsVar(resultData.Household)

  return (
        <>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/contractor-management" component={ContractorManagement} />
                <Route exact path="/dashboard/product-management" component={ProductManagement} />
                <Route exact path="/dashboard/user-management" component={UserManagement} />
                <Route exact exact path="/dashboard/registration" component={BeneficiaryAdd} />
                <Route exact path="/dashboard/enrollment" component={BeneficiaryRegister} />
                <Route exact path="/dashboard/technology-choice" component={TechnologyChoice} />
                <Route exact path="/dashboard/technology-selection" component={TechnologySelection} />
                <Route exact path="/dashboard/technology-approval" component={TechnologyApproval} />
                <Route exact path="/dashboard/technology-cost" component={TechnologyCost} />
                <Route exact path="/dashboard/technology-contribution" component={TechnologyContribution} />
                <Route exact path="/dashboard/contractor-allocation" component={ContractorAllocation} />
                <Route exact path="/dashboard/works-commencement" component={WorksStart} />
                <Route exact path="/dashboard/works-progress" component={WorksProgress} />
                <Route exact path="/dashboard/works-completed" component={WorksComplete} />
                <Route exact path="/dashboard/household-reports" component={HHProgress} />
                <Route exact path="/dashboard/area-reports" component={AreaProgress} />
                <Route exact path="/dashboard/project-reports" component={CityProgress} />
                <Route exact path="/dashboard/cases-received" component={CaseRegister} />
                <Route exact path="/dashboard/cases-status" component={CaseStatus} />z
                <Route exact path="/dashboard/cases-resolved" component={ResolvedCases} />
            </Switch>
        </>
  )
}
