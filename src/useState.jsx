import React, { useState } from "react";

function State() {
  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <p>{myNum}</p>
      <button onClick={() => setMyNum(123)}>Add my number</button>
    </>
  );
}

export default State;
