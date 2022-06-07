import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./component/redux/UserSlice";
const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
