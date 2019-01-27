import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import AirConditionerListPage from './pages/AirConditionerListPage';
import AirConditionerPage from './pages/AirConditionerPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={AirConditionerListPage}/>
    <Route path="/airConditioners/:id" component={AirConditionerPage}/>
  </Route>
);

export default routes;