import React from "react";
import ReactDOM from "react-dom";
import CApp from "./CApp";
import AApp from "./AApp";
import GApp from "./GApp";
import Home from "./Home";
import Layout from "./Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route
            path="course"
            element={<CApp heading="Course/Schedule" tag="4" />}
          />{" "}
          <Route path="alumni" element={<AApp heading="Alumni" tag="5" />} />{" "}
          <Route path="gallery" element={<GApp heading="Gallery" tag="6" />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
