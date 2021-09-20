import { TStudent, TStudentHash } from "../dataTypes";

export const createStudentsHash = (records: TStudent[]) => {
  const hash: TStudentHash = {};
  records.forEach((record: TStudent) => hash[record.id] = record.fields.Name);
  return hash;
};

export default createStudentsHash;
