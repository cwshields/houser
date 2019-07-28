import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import StepOne from './components/Wizard/StepOne';
import StepTwo from './components/Wizard/StepTwo';
import StepThree from './components/Wizard/StepThree';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/wizard' component={Wizard} />
    <Route path='/wizard/1' component={StepOne} />
    <Route path='/wizard/2' component={StepTwo} />
    <Route path='/wizard/3' component={StepThree} />
  </Switch>
)