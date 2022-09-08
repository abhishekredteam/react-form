import Dexie from "dexie";

  export const db = new Dexie("StudentDatabase");
  db.version(8).stores({
    students: "++id,fullName,fatherName,motherName,age,class,contactNumber",
  

  });
 db.open();
