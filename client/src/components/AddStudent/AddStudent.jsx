import React from "react";
import { Button, FormLabel, Grid, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createStudent,
  getStudentsActions,
} from "../../Redux/Actions/StudentActions";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

function AddStudent() {
  let pathname = window.location.pathname.split("/");
  let path = pathname[pathname.length - 1];
  console.log(path);

  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: "",
    age: "",
    gender: "male",
    fees: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorsValidate, setErrorsValidate] = useState({});

  const handleInputBox = (valueEvent, nameEvent) => {
    setInputValues({ ...inputValues, [nameEvent]: valueEvent });
  };

  const validate = (values) => {
    let errorsObj = {};
    let namePattern = /^[a-z\s]{3,30}$/i;
    let feesPattern = /[0-9]+/;

    if (!values.name) {
      errorsObj.name = "name is required";
    } else if (!namePattern.test(values.name)) {
      errorsObj.name =
        "name cann't be special character or number or 3<name<30";
    }
    if (!values.age) {
      errorsObj.age = "age is required";
    } else if (+values.age < 3 || +values.age > 27) {
      errorsObj.age = "age should be between 3-27";
    }

    if (!values.fees) {
      errorsObj.fees = "fees is required";
    } else if (+values.fees < 1500.5 || !feesPattern.test(+values.fees)) {
      errorsObj.fees = "fees should be greater equal to 1500.5 or number";
    }
    return errorsObj;
  };

  const handleInputsButton = (event) => {
    setIsSubmit(true);
    let errorsData = validate(inputValues);
    setErrorsValidate(validate(inputValues));
    if (Object.values(errorsData).length === 0) {
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

      <select
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
        style={{ marginTop: "8px", width: "100%", height: "50px" }}
        id="gender"
        name="gender"
        value={inputValues.gender}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>

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
