import React, { Component } from 'react';
import AirConditionerContainer from '../containers/AirConditionerContainer';
import Header from '../containers/Header.js';

export default class AirConditionerPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <AirConditionerContainer id={this.props.params.id} />
        </div>
      </div>
    );
  }
}