import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadUser, loadStarred} from '../actions';
import User from '../components/user'

const loadData = ({ login, loadUser, loadStarred }) => {
  loadUser(login, [ 'name' ]);
  loadStarred(login);
};

class UserPage extends Component {

  constructor() {
    super();
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
  }

  componentWillMount() {
    loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      loadData(nextProps)
    }
  }

  handleLoadMoreClick() {
    this.props.loadStarred(this.props.login, true);
  }

  render() {
    const { user, login } = this.props;

    console.log(this.props);

    if (!user) {
      return <h1><i>Loading {login}{"'s profile..."}</i></h1>;
    }

    const { starredRepos, starredRepoOwners, starredPagination } = this.props;

    return (
      <div>
        <User user={user} />
        <hr />

      </div>
    );
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
    pagination: { starredByUser },
    entities: {users, repos}
  } = state;

  const starredPagination = starredByUser[login] || { ids: [] };
  const starredRepos = starredPagination.ids.map(id => repos[id]);
  const starredRepoOwners = starredRepos.map(repo => users[repo.owner]);

  return {
    login,
    starredRepos,
    starredRepoOwners,
    starredPagination,
    user: users[login]
  }
};

export default connect(mapStateToProps, {
  loadUser,
  loadStarred
})(UserPage);