import { TStudentHash } from "../../dataTypes";
import { SAVE_STUDENTS } from "./types";

const saveStudents = (studentsData: TStudentHash) => (
  {
    type: SAVE_STUDENTS,
    payload: {
      studentsData,
    }
  }
);

export default saveStudents;
