import React, { useEffect, useState } from "react";
import { TextField, Grid, Typography, FormLabel, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editStudentActions,
  getStudentActions,
} from "../../Redux/Actions/StudentActions";

export const EditStudent = () => {
  const student = useSelector((state) => state.studentReducers.studentList);
  const navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();

  const [studentList, setStudentList] = useState("");

  useEffect(() => {
    dispatch(getStudentActions(id));
  }, [dispatch, id]);

  useEffect(() => {
    setStudentList(student);
  }, [student]);

  const handleBackHomeButton = () => {
    navigate("/");
  };

  const handleInputsButton = (event) => {
    event.preventDefault();
    if (
      studentList.name &&
      studentList.age &&
      studentList.gender &&
      studentList.fees
    ) {
      dispatch(editStudentActions(studentList, id));
      navigate("/");
    }
  };

  const handleInputBox = (valueEvent, nameEvent) => {
    setStudentList({ ...studentList, [nameEvent]: valueEvent });
  };

  return (
    <Grid item lg={6} sm={12} width="50%" margin="50px auto">
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
        Update Student
      </Typography>
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Name
      </FormLabel>
      <TextField
        value={(studentList && studentList.name) || ""}
        style={{ marginBottom: "30px", marginTop: "8px" }}
        id="name"
        size="normal"
        fullWidth
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
      />
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Age
      </FormLabel>
      <TextField
        style={{ marginBottom: "30px", marginTop: "8px" }}
        id="age"
        value={(studentList && studentList.age) || ""}
        size="normal"
        fullWidth
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
      />
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Gender
      </FormLabel>

      <TextField
        id="gender"
        value={(studentList && studentList.gender) || ""}
        size="normal"
        fullWidth
        margin="dense"
        style={{ marginBottom: "30px", marginTop: "8px" }}
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
      />
      <FormLabel style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Fees
      </FormLabel>
      <TextField
        id="fees"
        size="normal"
        fullWidth
        value={(studentList && studentList.fees) || ""}
        margin="dense"
        style={{ marginTop: "8px" }}
        onChange={(event) =>
          handleInputBox(event.target.value, event.target.id)
        }
      />
      <Grid container display="flex" justifyContent="space-evenly">
        <Button
          type="button"
          variant="contained"
          style={{ fontSize: "1.8rem", marginBottom: "20px" }}
          onClick={(e) => handleInputsButton(e)}
        >
          SUBMIT
        </Button>
        <Button
          type="button"
          variant="contained"
          style={{ fontSize: "1.8rem", marginBottom: "20px" }}
          onClick={(e) => handleBackHomeButton()}
        >
          Back Home
        </Button>
      </Grid>
    </Grid>
  );
};
