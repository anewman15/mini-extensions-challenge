import React from 'react'
import Login from './Login';
import UserPage from './UserPage';

const Home = () => {
  const classes = [
    {
      name: 'CS01',
      students: ['AKalam', 'Hasina', 'Nadira']
    }
  ];
  
  return (
    <div>
      <Login />
      <UserPage classes={classes}/>
    </div>
  )
}

export default Home
