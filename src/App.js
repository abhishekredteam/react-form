import React, { useEffect } from "react";
import "./App.css";
import AppNavbar from "./Components/AppNavbar";

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
  };

  useEffect(() => {
    createCollectionsInIndexedDb();
  }, []);

  return (
    <div className="App">
      <AppNavbar/>
    </div>
  );
}

export default App;
