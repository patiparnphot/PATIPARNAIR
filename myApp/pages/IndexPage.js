import React, { Component } from 'react';
import AirConditionerList from '../containers/IndexPage.js';
import Header from '../containers/Header.js';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <AirConditionerList />
        </div>
      </div>
    );
  }
}


export default IndexPage;