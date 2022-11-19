import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import "./table.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteStudentActions,
  getStudentActions,
  getStudentsActions,
} from "../../Redux/Actions/StudentActions";
import { useNavigate } from "react-router-dom";

function Students() {
  const dispatch = useDispatch();
  const [studentLists, setStudentLists] = useState([]);
  const navigate = useNavigate();
  const data = useSelector((state) => state.studentReducers.studentLists);

  useEffect(() => {
    setStudentLists(data);
  }, [data]);

  useEffect(() => {
    dispatch(getStudentsActions());
  }, [dispatch]);

  const handleDeleteIcon = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your data has been deleted!", {
          icon: "success",
        });
        dispatch(deleteStudentActions(id, studentLists));
      } else {
        swal("Your data is safe!");
      }
    });
  };

  const handleEditButton = (id) => {
    dispatch(getStudentActions(id));
    navigate(`/student/edit/${id}`);
  };

  return (
    <Grid item lg={6} sm={12}>
      <Typography
        variant="h3"
        bgcolor="pink"
        color="white"
        textAlign="center"
        borderRadius="10px"
        p={1}
        mb={2}
        fontWeight="bold"
      >
        List of Students
      </Typography>
      <div className="table.css">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Fees</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {studentLists &&
              studentLists.map(({ name, age, gender, fees, _id }, ind) => (
                <tr key={ind}>
                  <td className="td">{ind + 1}</td>
                  <td className="td">{name}</td>
                  <td className="td">{age}</td>
                  <td className="td">{gender}</td>

                  <td className="td">{fees}</td>
                  <td
                    className="td"
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <EditIcon
                      style={{
                        color: "blue",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        handleEditButton(_id);
                      }}
                    />
                    <DeleteSharpIcon
                      style={{
                        color: "red",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => handleDeleteIcon(_id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Grid>
  );
}

export default Students;
