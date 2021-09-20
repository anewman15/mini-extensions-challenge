import { SAVE_STUDENTS } from "./types";

const saveStudents = studentsData => (
  {
    type: SAVE_STUDENTS,
    payload: {
      studentsData,
    }
  }
);

export default saveStudents;
