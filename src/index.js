import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as Constants from './constants/AppConstants';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import {Breadcrumb, Row, Col} from 'react-bootstrap';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Loader from './components/common/Loader';
import App from './App'
import './assets/css/style.css';
import './assets/css/responsive.css';

import appCache from './util/appCache'

const client = new ApolloClient({ 
  uri: Constants.REACT_APP_GRAPHQL_URI || '/graphql',
  cache: appCache
 });

export const sortOrder = client.cache.makeVar("DESC");

const AppWithApollo = () => {

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

const MainLayout = () => {
  const [state, setState] = useState({sideMenu: true, loading: false});

  // Toggle side bar menu
  const _onSideMenu = (active) => {
      setState({sideMenu: active});
  }
   let loader = null;
      if (state.loading) {
          loader = <Loader message="Loading..." />
      }
  return (
       <div className="page-wrapper">
         <BrowserRouter>
          <div>
            {/* Navigation */}
              <Navigation onClick={_onSideMenu} />
            {/* End Navigation */}
            
            <div className={`main-content d-flex flex-column ${state.sideMenu ? '' : 'hide-sidemenu'}`}>
                {/* Loader */}
                {loader}
                {/* End Loader */}

                {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>"Dynamic Header Text Comes here"</h1>
                        </Breadcrumb>
                    </div>
                {/* End Breadcrumb */}

                {/* MAIN CONTENT STARTS HERE */}

                <AppWithApollo />

                {/* MAIN CONTENT ENDS HERE */}

                {/* Footer */}
                <div className="flex-grow-1"></div>
                <Footer /> 
                {/* End Footer */}

            </div>
          </div>
          </BrowserRouter>
      </div>
  )
  
}

ReactDOM.render(
        <MainLayout />, document.querySelector('#root')
);
