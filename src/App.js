import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
function App() {

  
  return (
    <div className="mx-auto text-center mt-10 w-1/2">
    <h1>Signup form</h1>
    <Signup/>
    <h1>Login form</h1>
    <Login/></div>

  );
}

export default App;
