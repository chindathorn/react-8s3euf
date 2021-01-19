import React, { useRef } from "react";

function Ref() {
  const step = useRef(0);

  return <button onClick={() => step.current++}>Step</button>;
}

export default Ref;
