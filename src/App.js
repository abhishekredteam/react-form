import React, { useEffect } from "react";
import "./App.css";
import AppRoute from "./AppRoute";
import Db from './Components/Db'
import StudentList from './Components/StudentList'
// import SignInOUtContainer from "./Container/Container";
// import Login from "./Container/Login";


function App() {

 
  return (
    <div className="App">
      <AppRoute/>
      <Db/>
      {/* <StudentList/> */}
    </div>
  );
}

export default App;
