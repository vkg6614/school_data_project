import React from "react";
import { Button, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStudent } from "../../Redux/Actions/StudentActions";
import swal from "sweetalert";
function AddStudent() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: "",
    age: "",
    gender: "",
    fees: "",
  });
  const handleInputBox = (valueEvent, nameEvent) => {
    setInputValues({ ...inputValues, [nameEvent]: valueEvent });
  };

  const handleInputsButton = (event) => {
    event.preventDefault();
    swal({
      title: "Done",
      text: "Your data has been edit to the lists",
      icon: "success",
    });
    dispatch(createStudent(inputValues));

    setInputValues({
      name: "",
      age: "",
      gender: "",
      fees: "",
    });
  };

  return (
    <Grid item lg={6} sm={12}>
      <Typography
        variant="h3"
        color="success.main"
        bgcolor="lightGreen"
        textAlign="center"
        borderRadius="10px"
        p={1}
        mb={2}
        fontWeight="bold"
      >
        Add New Student
      </Typography>
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Name
      </FormLabel>
      <TextField
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
        value={inputValues.name}
        style={{ marginBottom: "30px", marginTop: "8px" }}
        id="name"
        size="normal"
        fullWidth
      />
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Age
      </FormLabel>
      <TextField
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
        style={{ marginBottom: "30px", marginTop: "8px" }}
        id="age"
        value={inputValues.age}
        size="normal"
        fullWidth
      />
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Gender
      </FormLabel>

      <TextField
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
        id="gender"
        value={inputValues.gender}
        size="normal"
        fullWidth
        margin="dense"
        style={{ marginBottom: "30px", marginTop: "8px" }}
      />
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Fees
      </FormLabel>
      <TextField
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
        id="fees"
        size="normal"
        fullWidth
        value={inputValues.fees}
        margin="dense"
        style={{ marginTop: "8px" }}
      />

      <Button
        type="button"
        variant="contained"
        fullWidth
        style={{ fontSize: "1.8rem", marginBottom: "20px" }}
        onClick={handleInputsButton}
      >
        SUBMIT
      </Button>
    </Grid>
  );
}

export default AddStudent;
