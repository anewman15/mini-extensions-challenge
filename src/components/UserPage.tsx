import React from 'react';

type UserPageProps = {
  classes: {
    name: string,
    students: string[]
  }[]
}
const UserPage = ( { classes }: UserPageProps) => {
  return (
    <div>
      {
        classes.map(cl => {
          return (
            <div key={cl.name}>
              {cl.name}
              <div>
                {
                  cl.students.map(student => {
                    return (
                      <span>{student}&nbsp;</span>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default UserPage;
