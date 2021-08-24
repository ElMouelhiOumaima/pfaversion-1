import React from "react";
import DocumentApp from "../Document/DocumentApp";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../../wiem/reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function Employés() {
  return (
    <Provider store={store}>
        <DocumentApp />
    </Provider>
  );
}
