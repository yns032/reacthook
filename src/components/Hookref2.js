import React, { useEffect, useRef, useState } from "react";

function Hookref2() {
  const countRef = useRef(0);
  const [name, setName] = useState("");

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      {`Component rerender ${countRef.current}`}
    </div>
  );
}

export default Hookref2;
