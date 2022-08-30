import React, { useEffect } from "react";
import "./App.css";
import AppNavbar from "./Components/AppNavbar";
import StudentList from "./Components/StudentList";
import Signup from "./Container/Signup";
// import SignInOUtContainer from "./Container/Container";
// import Login from "./Container/Login";
function App() {

  const idb = window.indexedDB || window.mozIndexedDb;
  const createCollectionsInIndexedDb = () => {
    if (!idb) {
      console.log("this Browser doesnt sopports IndexedDb");
      return;
    }
    console.log(idb);
    const request = idb.open("DBName", 2);

    request.onerror = (event) => {
      console.error("An error occured with indexedDb");
      console.error(event);
    };

    request.onupgradeneeded = (event) => {
      console.log(event);
      const db = request.result;
      if (!db.objectStoreNames.contains("userData")) {
        db.createObjectStore("userData", {
          keyPath: "id",
         
        });
        
      }
    };
    request.onsuccess=()=>{
      console.log('Database opened successfuly')
    }
  };

  useEffect(() => {
    createCollectionsInIndexedDb();
  }, []);

  return (
    <div className="App">
      <AppNavbar/>
      {/* <SignInOUtContainer/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
