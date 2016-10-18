import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

const API_ROOT = 'https://api.github.com/';

const callApi = (endpoint, schema) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then((res) => res.json()
      .then((json) => {
        if (!res.ok) return Promise.reject(json);


        console.log(json);
        console.log(res);
      })
    )

};

const userSchema = new Schema('users', {
  idAttribute: (user) => user.login.toLowerCase()
});

const repoSchema = new Schema('repos', {
  idAttribute: (repo) => repo.fullName.toLowerCase()
});

repoSchema.define({
  owner: userSchema
});

// Schemas for Github API responses.
export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  REPO: repoSchema,
  REPO_ARRAY: arrayOf(repoSchema)
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types } = callAPI;

  console.log(store);
  console.log(action);

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [ requestType, successType, failureType ] = types;

  return callApi(endpoint, schema)
    .then(res => next(actionWith({
      res,
      type: successType
    })))
}