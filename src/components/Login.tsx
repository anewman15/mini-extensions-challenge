import { useState } from 'react';
import { connect } from 'react-redux';
import { Record, Records, FieldSet } from 'airtable';
import { allStudentsResponse, getClasses, getUser } from '../sandbox/airtable';
import createStudentsArray from '../utils/createStudentsArray';
import createStudentsHash from '../utils/createStudentsHash';
import filterString from '../utils/filterString';
import saveUser from '../redux/actions/saveUser';
import saveClasses from '../redux/actions/saveClasses';
import saveStudents from '../redux/actions/saveStudents';

const Login = ({ user, saveUser, classes, saveClasses, students, saveStudents }: any) => {
  const [username, setUsername] = useState('');
  const handleLogin: any = async (event: any): Promise<void> => {
    event.preventDefault();

    let classesFilterString: string = ''
    let studentsFilterString = ''

    try {
      let userResponse = await getUser(username);
      let usr: any = null;
      if (!userResponse.length) {
        throw new Error('User Not Found.');
      } else {
        usr = userResponse[0];
        console.log(usr)
        saveUser(usr);
        console.log(user)
      }

      classesFilterString = filterString(usr.fields.Classes);

      let classesTableResponse = await getClasses(classesFilterString);
      const studentIds = createStudentsArray(classesTableResponse);
      saveClasses(classesTableResponse);
      studentsFilterString = filterString(studentIds);
      let allPeers: Records<FieldSet> = await allStudentsResponse(studentsFilterString)
      const studentsHash = createStudentsHash(allPeers);
      console.log(studentsHash);
      saveStudents(studentsHash);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Enter name
        <input type="text" onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <button type="submit">Log in</button>
      </form>
      <div>{user.fields.Name}</div>
      <div>{classes.map((cls: Record<FieldSet>) => <p key={cls.id}>{cls.fields.Name}</p>)}</div>
      <div>{Object.values(students).map((name: any) => <p key={name}>{name}</p>)}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  classes: state.classes,
  students: state.students
});

export default connect(mapStateToProps, { saveUser, saveClasses, saveStudents })(Login);
