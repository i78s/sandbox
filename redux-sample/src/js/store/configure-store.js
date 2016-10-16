import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import todoApp from '../reducers';
import {logger} from "../middleware";

const finalCreateStore = compose(
  applyMiddleware(logger),  // 追加
  applyMiddleware(thunk)
  //,
  //reduxReactRouter({ routes, createHistory }),
  //applyMiddleware(createLogger()),  // コメントアウト
  //DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(todoApp, initialState);

  //if (module.hot) {
  //  // Enable Webpack hot module replacement for reducers
  //  module.hot.accept('../reducers', () => {
  //    const nextRootReducer = require('../reducers');
  //    store.replaceReducer(nextRootReducer);
  //  });
  //}

  return store;
}