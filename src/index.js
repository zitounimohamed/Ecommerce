import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/*import './Components/assets/bootstrap.css'*/
import "./Components/assets/style.css";
import { Provider } from "react-redux";
import store from './Components/store'
//import { composeWithDevTools } from "redux-devtools-extension";

/*
//Creating the store
const store = createStore(
  rootReducer,
  // using Thunk middleware
  // with redux dev tools so you can see the state changes
  composeWithDevTools(applyMiddleware(thunk))
);
*/

ReactDOM.render(
  // Use provider to link the App component to the store
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

