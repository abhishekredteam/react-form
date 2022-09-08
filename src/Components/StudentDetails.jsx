import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { db } from "../Db";

function Details() {
  const paperStyle = {
    padding: "50px ",
    margin: "50px auto",
    width: 400,
  };

  const [stdDetails, setStdDetails] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    age: "",
    class: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    setStdDetails((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting", stdDetails);
    const id = await db.students.add({
      fullName: stdDetails?.fullName,
      fatherName: stdDetails?.fatherName,
      motherName: stdDetails?.motherName,
      age: stdDetails?.age,
      class: stdDetails?.class,
      contactNumber: stdDetails?.contactNumber,
      
    });
    alert(id);
  }

    return (

        <div>

          <Grid>
            <Paper style={paperStyle} elevation={5} >
              <Grid align="center">
                <Avatar src="/broken-image.jpg" />
              </Grid>
              <Typography variant="h6">Enter Students Details Form</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                name="fullName"
                value={ stdDetails?.fullName}
                  id="filled-basic"
                  label="Full Name"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}
                />
                <TextField
                name="fatherName"
                value={ stdDetails?.fatherName}
                  // id="filled-basic"
                  label="Father Name"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}

                />
                <TextField
                 name="motherName"
                value={ stdDetails?.motherName}
                  id="filled-basic"
                  label="Mother Name"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}

                />
                <TextField
                 name="age"
                value={ stdDetails?.age}
                  type="number"
                  id="filled-basic"
                  label="Age"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}

                />
                <TextField
                name="class"
                value={ stdDetails?.class}
                  type="number"
                  id="filled-basic"
                  label="Class"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}

                />
                <TextField
                 name="contactNumber"
                value={ stdDetails?.contactNumber}
                  type="number"
                  id="filled-basic"
                  label="Contact Number"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}

                />
                <br></br>
               

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ margin: "10px" }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </div>
    );
  };


export default Details;
