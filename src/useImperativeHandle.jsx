import React, { useRef, useImperativeHandle, forwardRef } from "react";

function ImperativeHandle(props, ref) {
  const myBtn = useRef(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("clicking button");
      myBtn.current.click();
    }
  }));

  return <button ref={myBtn}>My Button</button>;
}

ImperativeHandle = forwardRef(ImperativeHandle);

export default ImperativeHandle;
