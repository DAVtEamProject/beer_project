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
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

/* eslint-disable no-underscore-dangle */
// can be issue as composer expected a function
// const devtoolMiddleware =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : null;

/* eslint-enable */
thunk.withExtraArgument({ getFirebase, getFirestore });
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
    })
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
