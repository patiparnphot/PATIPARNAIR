import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {  
  
  render() {
    
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">BNK48APP</Link>
          </div>
        </div>
      </nav>
    );
  }
}