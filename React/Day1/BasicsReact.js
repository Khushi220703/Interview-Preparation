/* This is the functional component*/

import React, { useState } from 'react'

const BasicsReact = ({name}) => {
   // here name is prop which come from parent componet..
   // we cant change name here cause error.

    const [loggedIn, setLoggedIn] = useState(false); // state of componet. can be changed.

    const logout = () =>{

        setLoggedIn(!loggedIn);
        
    }

  return (
   
    <div> 
        {/* This is called JSX and it should have a wrapper as a div or fragment <></> */}
      <h1>Hi! {name} you are {loggedIn? "Logged in": "Not logged in" }</h1>
      <button onClick={logout}> {loggedIn ? "Log out" : "Log in"}</button>
    </div>
  )
}

export default BasicsReact
