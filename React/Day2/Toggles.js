import React, { useState } from 'react'

const Toggles = () => {

    const [on, setOn] = useState(false);
  return (
    <div>
       <p>{on ? "ON" : "OFF"}</p>
       <button onClick={setOn(prev=>!prev)}>{!on ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Toggles
