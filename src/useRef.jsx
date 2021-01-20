import React, { useRef, useEffect } from "react";

function Ref() {
  const counter = useRef(0);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <>
      {/*<button onClick={() => intervalRef.current++}>Step</button>*/}
      <p>{`The component has been re-rendered ${counter} times`}</p>
    </>
  );
}

export default Ref;
