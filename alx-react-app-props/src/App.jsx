import React, {useState} from 'react'
import UserProfile from './UserProfile';
import UserContext from './components/UserContext';


function App() {
  const userData = { name: "Jabne Doe", email: "jane.doe example.com"};

  return (
    <>
     <UserContext.Provider value={userData} >
     <UserProfile  />;
     </UserContext.Provider>
    </>
  )
}

export default App;
