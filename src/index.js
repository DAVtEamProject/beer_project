import React from "react";
import { render } from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */
// thunk.withExtraArgument({ getFirebase, getFirestore })
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
      logger
    ),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true
    }),
    devtoolMiddleware
  )
);

// render(<App />);

store.firebaseAuthIsReady.then(() => {
  render(<Main />, document.getElementById("root"));
});
const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();