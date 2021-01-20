import React, { useState, useCallback } from "react";

function Callback() {
  const [item, setItem] = useState(0);

  const showItem = useCallback(() => {
    alert(`item ${item}`);
  }, [item]);

  return (
    <>
      <p>{item}</p>
      <CallbackChild showItem={showItem} />
    </>
  );
}

function CallbackChild(showItem) {
  const onClick = () => {
    showItem;
  };
  return (
    <>
      <button onClick={onClick}>Show Item</button>
    </>
  );
}

export default Callback;
