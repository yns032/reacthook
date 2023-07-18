import React, { useRef } from "react";

function Hookref() {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleRef = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>Tıkla</button>
    </div>
  );
}

export default Hookref;
