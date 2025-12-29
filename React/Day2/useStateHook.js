import React, { useState } from 'react'

const useStateHook = () => {
    const [name,setName] = useState("");
  return (
    <div>
       <input type="text" name='name' value={name} onChange={e=>setName(value)} placeholder='Enter your name' />
    </div>
  )
}

export default useStateHook
