import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from '../components/dashboard/Dashboard';
import BeneficiaryRegister from "../features/beneficiary-targeting/BeneficiaryRegister";
import BeneficiaryAdd from "../features/beneficiary-targeting/BeneficiaryAdd";
import TechnologyChoice from "../features/request-for-service/TechnologyChoice";
import TechnologySelection from "../features/request-for-service/TechnologySelection";
import TechnologyApproval from "../features/request-for-service/TechnologyApproval"
import TechnologyCost from "../features/request-for-service/TechnologyCost"
import TechnologyContribution from "../features/contribute-for-oss/TechnologyContribution";
import WorksStart from "../features/oss-works/WorksStart";
import WorksProgress from "../features/oss-works/WorksProgress";
import WorksComplete from "../features/oss-works/WorksComplete";
import ContractorAllocation from "../features/oss-works/ContractorAllocation";
import ContractorManagement from "../features/system-administration/ContractorManagement";
import ProductManagement from "../features/system-administration/ProductManagement";
import UserManagement from "../features/system-administration/UserManagement";
import RegisterUser from "../features/system-administration/RegisterUser";
import ForgotPassword from "../features/system-administration/ForgotPassword";
import Login from '../features/Login';
import FourHandedFourError from '../features/404/FourHandedFourError';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import {ClientContext, GraphQLClient} from 'graphql-hooks';
import * as Constants from '../constants/AppConstants';

const client = new GraphQLClient({url:Constants.REACT_APP_GRAPHQL_URI});

const AppRouter = () => (
    <ClientContext.Provider value={client}>
        <React.Fragment>
            <Route exact path="/" render={() => (
                <Redirect to="/dashboard/" />
            )} />
            <Route path="/login/" component={Login} />
            <Route path="/dashboard/" exact component={Dashboard} />
            <Route path="/error-404/" component={FourHandedFourError} />
            <Route path="/beneficiary-targeting/" component={BeneficiaryRegister} />
            <Route path="/technology-choice/" component={TechnologyChoice} />
            <Route path="/tech-selection/" component={TechnologySelection} />
            <Route path="/tech-approval/" component={TechnologyApproval} />
            <Route path="/tech-cost/" component={TechnologyCost} />
            <Route path="/payment/" component={TechnologyContribution} />
            <Route path="/contractor-allocation/" component={ContractorAllocation} />
            <Route path="/works-start/" component={WorksStart} />
            <Route path="/works-progress/" component={WorksProgress} />
            <Route path="/works-completion/" component={WorksComplete} />
            <Route path="/contractor-management/" component={ContractorManagement} />
            <Route path="/products-services/" component={ProductManagement} />
            <Route path="/user-management/" component={UserManagement} />
            <Route path="/register-user/" component={RegisterUser} />
            <Route path="/forgot-password/" component={ForgotPassword} />
            <Route path="/registration/" component={BeneficiaryAdd} />
        </React.Fragment>
    </ClientContext.Provider>
    
);

export default AppRouter;