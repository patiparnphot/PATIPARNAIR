import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <p>app dev version 0.00.000</p>
        {this.props.children}
        <footer key="footer" className="footer">
            <div className="container">
              <p className="text-muted">&copy; PATIPARNAIR APP 2018</p>
            </div>
        </footer>
      </div>
    );
  }

}