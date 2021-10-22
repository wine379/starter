import React, {useState} from 'react'
import { Switch, Route} from 'react-router-dom';
import { householdsVar } from './util/appCache'
import { gql, useQuery } from '@apollo/client'

//IMPORT COMPONENTS

import Dashboard from './components/dashboard/Dashboard';
import BasicLivelihood from './basic-livelihood/BasicLivelihood';

import Loader from './components/common/Loader';
import * as Constants from './constants/AppConstants';

export default function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/basic-livelihood" component={BasicLivelihood} />
      </Switch>
    </>
  )
}
