import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import StudentDetails from './Components/StudentDetails';
import Studentlist from './Components/Studentlist';

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

    }

    request.onupgradeneeded = (event) => {
      console.log(event);
      const db = request.result;
      if (!db.objectStoreNames.contains('userData')) {
        db.createObjectStore('userData', {
          keyPath: "id"
        })
      }
    }

  }

  useEffect(() => {
    createCollectionsInIndexedDb();
  }, [])


  return (
    <div className="App">
<Navbar  />
<StudentDetails />
<Studentlist  />
    </div>
  );
}

export default App;
