import "./App.scss";
import React from "react";
// import {DatePicker , Button } from 'antd';
// import { Counter } from "./features/counter/Counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ReactDom from "react-dom";
import { router } from "./router/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.js";
class App extends React.Component {
  render() {
    return (
      <>
        <React.StrictMode>
          <div className="app-container">
            <div className="header-container">
              <Header />
            </div>
            <div className="main-container">
              <div className="sidenav-container">

              </div>
              <div className="app-content">
                 <Outlet/>
              </div>
            </div>
          </div>
        </React.StrictMode>
      </>
    );
  }
}
export default App;
