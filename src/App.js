/* eslint-disable */
import React, { useEffect } from "react";

import "./App.css";
import AppRoute from "./AppRoute";
import { db } from './Db'

import Details from "./Components/StudentDetails";



function App() {

 
  return (
    <div className="App">
      <AppRoute/>
      {/* <Details /> */}
 
    </div>
  );
}

export default App;
