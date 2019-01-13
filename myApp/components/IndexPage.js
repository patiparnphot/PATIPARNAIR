import React from 'react';
import { Link } from 'react-router';


export default class IdolsList extends React.Component {
  componentWillMount() {
    this.props.fetchAirConditioners();
  }

  renderAirConditioners(airConditioners) {
    return idols.map((airConditioner) => {
      return (
        <div className="col-md-3 col-sm-6">
          <div className="thumbnail">
            <img src={ airConditioner.image }/>
            <div className="caption">
              <h4>{ airConditioner.nickname }</h4>
            </div>
            <p>
              <Link className="btn btn-primary btn-lg" to={"/airConditioners/" + airConditioner.id}>More INFO</Link>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    
    const { airConditioners, loading, error } = this.props.airConditionerList;

    if(loading) {
      return <div className="container"><h1>Idols</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    
    return (
      <div>
      <div className="jumbotron">
        <div className="container">
          <h1><span className="glyphicon glyphicon-tent"></span> Welcome To BNK48 App</h1>
          <p>a community which Ota share their beloved idol story</p>
          <p>
            nbnbnkjjk
          </p>
        </div>
      </div>
      <div className="row text-center">
        {this.renderAirConditioners(airConditioners)}
      </div>
      </div>
    );
  }
}