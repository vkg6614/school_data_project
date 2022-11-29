import React from "react";
import { Button, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createStudent,
  getStudentsActions,
} from "../../Redux/Actions/StudentActions";
import swal from "sweetalert";

function AddStudent() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: "",
    age: "",
    gender: "",
    fees: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorsValidate, setErrorsValidate] = useState({});

  const handleInputBox = (valueEvent, nameEvent) => {
    setInputValues({ ...inputValues, [nameEvent]: valueEvent });
  };

  const validate = (values) => {
    let errorsObj = {};
    if (!values.name) {
      errorsObj.name = "name is required";
    }
    if (!values.age) {
      errorsObj.age = "age is required";
    }
    if (!values.gender) {
      errorsObj.gender = "gender is required";
    }
    if (!values.fees) {
      errorsObj.fees = "fees is required";
    }
    return errorsObj;
  };

  const handleInputsButton = (event) => {
    setIsSubmit(true);
    setErrorsValidate(validate(inputValues))
    if (
      inputValues.name &&
      inputValues.age &&
      inputValues.gender &&
      inputValues.fees
    ) {
      dispatch(createStudent(inputValues));
      dispatch(getStudentsActions());

      swal({
        title: "Done",
        text: "Your data has been edit to the lists",
        icon: "success",
      });

      setInputValues({
        name: "",
        age: "",
        gender: "",
        fees: "",
      });
      setIsSubmit(false);
    } else {
      swal({
        title: "Done",
        text: "field or fields can't be empty",
        icon: "warning",
      });
    }
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
        style={{ marginTop: "8px" }}
        id="name"
        size="normal"
        fullWidth
      />

      <Typography
        variant="body2"
        color="red"
        fontWeight="bold"
        fontSize={15}
        mb={1}
      >
        {isSubmit && errorsValidate.name}
      </Typography>
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Age
      </FormLabel>
      <TextField
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
        style={{ marginTop: "8px" }}
        id="age"
        value={inputValues.age}
        size="normal"
        fullWidth
      />

      <Typography
        variant="body2"
        color="red"
        fontWeight="bold"
        fontSize={15}
        mb={1}
      >
        {isSubmit && errorsValidate.age}
      </Typography>

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
        style={{ marginTop: "8px" }}
      />

      <Typography
        variant="body2"
        color="red"
        fontWeight="bold"
        fontSize={15}
        mb={1}
      >
        {isSubmit && errorsValidate.gender}
      </Typography>

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

      <Typography
        variant="body2"
        color="red"
        fontWeight="bold"
        fontSize={15}
        mb={1}
      >
        {isSubmit && errorsValidate.fees}
      </Typography>

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
