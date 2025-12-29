
import React, { useRef } from 'react';

const useRefHook = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // direct DOM access
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default useRefHook;
