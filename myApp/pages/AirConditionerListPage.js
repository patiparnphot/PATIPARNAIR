import React, { Component } from 'react';
import AirConditionerListContainer from '../containers/AirConditionerListContainer.js';
import Header from '../containers/Header.js';

class AirConditionerListPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <AirConditionerListContainer />
        </div>
      </div>
    );
  }
}


export default AirConditionerListPage;