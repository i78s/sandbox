import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Explore from '../components/explore';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`);
  }

  render() {
    const { children, inputValue } = this.props;

    return (
      <div>
        <Explore value={inputValue}
                 onChange={this.handleChange} />
        <hr />
        {children}
      </div>
    )
  }
}

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

const mapStateToProps = (state, ownProps) => ({
  inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps)(App);