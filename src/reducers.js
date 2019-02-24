import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import wishManageReducer from "./app/apis/wish-manage-duck-api";
import authReducer from "./app/apis/auth";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

// submitWish: wishManageReducer,
const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
