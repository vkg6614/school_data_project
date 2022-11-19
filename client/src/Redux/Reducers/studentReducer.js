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

const initialState = { studentLists: [] };

const studentReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        studentLists: [...state.studentLists, action.payload.data],
      };
    case CREATE_STUDENT_FAIL:
      return {
        studentLists: [],
      };

    case GET_STUDENT_SUCCESS:
      return { ...state, studentLists: action.payload.data };
    case GET_STUDENT_FAIL:
      return { studentLists: [] };

    case GET_SINGLE_STUDENT_SUCCESS:
      return { ...state, studentList: action.payload.data };
    case GET_SINGLE_STUDENT_FAIL:
      return { studentLists: [] };

    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        studentLists: [...state.studentLists, action.payload.data],
      };
    case EDIT_STUDENT_FAIL:
      return { studentLists: [] };

    case DELETE_STUDENT_SUCCEES:
      const { studentList } = action.payload;
      return { ...state, studentLists: studentList };
    case DELETE_STUDENT_FAIL:
      return { studentLists: [] };

    default:
      return state;
  }
};

export { studentReducers };
