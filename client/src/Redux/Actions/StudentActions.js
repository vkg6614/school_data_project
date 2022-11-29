import axios from "axios";
import {
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_SUCCEES,
  EDIT_STUDENT_FAIL,
  EDIT_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_FAIL,
  GET_SINGLE_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_SUCCESS,
} from "../ActionTypes/ActionTypes";

const createStudent = (data) => async (dispatch) => {
  try {
    await axios.post("/student/add", data);
    
    dispatch({ type: CREATE_STUDENT_SUCCESS, payload: { data } });
  } catch (error) {
    dispatch({ type: CREATE_STUDENT_FAIL, payload: [] });
  }
};

const getStudentsActions = () => async (dispatch) => {
  try {
    let { data, status } = await axios.get("/student/all");
    dispatch({ type: GET_STUDENT_SUCCESS, payload: { data, status } });
  } catch (error) {
    dispatch({ type: GET_STUDENT_FAIL });
  }
};

const getStudentActions = (id) => async (dispatch) => {
  try {
    let { data, status } = await axios.get(`/student/single/${id}`);
    dispatch({ type: GET_SINGLE_STUDENT_SUCCESS, payload: { data, status } });
  } catch (error) {
    dispatch({ type: GET_SINGLE_STUDENT_FAIL });
  }
};

const editStudentActions = (data, id) => async (dispatch) => {
  try {
    await axios.put(`/student/edit/${id}`, data);
    dispatch({ type: EDIT_STUDENT_SUCCESS, payload: { data } });
  } catch (error) {
    dispatch({ type: EDIT_STUDENT_FAIL });
  }
};

const deleteStudentActions = (id, studentLists) => async (dispatch) => {
  try {
    await axios.delete(`/student/delete/${id}`);

    let studentList = [];
    studentLists.map((currElem) => {
      if (currElem._id !== id) {
        studentList.push(currElem);
      }
      return null;
    });

    dispatch({ type: DELETE_STUDENT_SUCCEES, payload: { studentList } });
  } catch (error) {
    dispatch({ type: DELETE_STUDENT_FAIL });
  }
};

export {
  createStudent,
  getStudentsActions,
  getStudentActions,
  editStudentActions,
  deleteStudentActions,
};
