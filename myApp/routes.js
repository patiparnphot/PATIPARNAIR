import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import IndexPage from './pages/IndexPage';
import AirConditionerPage from './pages/AirConditionerPage';
// import ShareIdol from './pages/ShareIdol';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="/airConditioners/:id" component={AirConditionerPage}/>
  </Route>
);

export default routes;