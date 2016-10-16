import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class App extends Component {

  render() {
    return (
      <div>
         App
      </div>
    )
  }
}

App.propTypes = {

};

export default connect()(App);