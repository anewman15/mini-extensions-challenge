import { TClass } from "../dataTypes";

const createStudentsArray = (records: TClass[]) => {
  const studentIdArray: string[][] = [];
  records.forEach((record: TClass) => studentIdArray.push(record.fields.Students));
  return studentIdArray.flat();
};

export default createStudentsArray;
