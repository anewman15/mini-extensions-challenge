export type TUser = {
  id: string,
  fields: {
    Name: string,
    Classes: string[],
  }
};

export type TStudent = {
  id: string,
  fields: {
    Name: string
  }
};

export type TClass = {
  id: string,
  fields: {
    Name: string,
    Students: string[],
  }
};

export type TStudentHash = {
  [key: string]: string
};

