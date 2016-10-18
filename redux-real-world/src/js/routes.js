import React from 'react';
import { Route } from 'react-router';
import App from './containers/app';
import UserPage from './containers/user-page';

export default <Route path="/" component={App}>
  <Route path="/:login"
         component={UserPage} />
</Route>