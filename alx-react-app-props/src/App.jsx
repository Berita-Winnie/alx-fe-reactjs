import React, {useState} from 'react'
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';


function App() {
  const userData = { name: "Jabne Doe", email: "jane.doe example.com"};

  return (
    <>
     <UserContext.Provider value={userData} >
     <ProfilePage  />;
     </UserContext.Provider>
    </>
  )
}

export default App;
