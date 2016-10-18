import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadUser,
  // loadStarred
} from '../actions';

const loadData = ({ login, loadUser, loadStarred }) => {
  loadUser(login, [ 'name' ]);
  // loadStarred(login);
};

class UserPage extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    return (
      <div>
        UserPage
        <hr />

      </div>
    )
  }
}

UserPage.propTypes = {
  login: PropTypes.string.isRequired,
  user: PropTypes.object,
  loadUser: PropTypes.func.isRequired
  //,
  //loadStarred: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = ownProps.params.login.toLowerCase();

  const {
    entities: {users, repos}
  } = state;

  return {
    login
  }
};

export default connect(mapStateToProps, {
  loadUser
})(UserPage);