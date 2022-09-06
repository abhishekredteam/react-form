import Dexie from "dexie";
const Db=()=>{

 // Creating instance of the database    
var db = new Dexie("StudentDatabase");
db.version(1).stores({ students: "++id,firstName,lastName,age,Dob,class,mobileNumber" });
db.open();

// Interact With Database
db.transaction("rw", db.students,  function* () {
    
    // Let's add some data to db:
    var student1Id = yield db.students.add({
        id:1,
      firstName: 'kartik',
      lastName:"b",
      age: 25,
      Dob:'01/01/2000',
      class:2,
      mobileNumber:'123456789'
    })
    var student2Id = yield db.students.add({
        id:2,
        firstName: 'rohit',
        lastName:"g",
        age: 6,
        Dob:'01/02/1999',
        class:4,
        mobileNumber:'1215246514'
       
      });
})
}

export default Db;