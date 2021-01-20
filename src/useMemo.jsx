import React, { useState, useMemo } from "react";

function Memo() {
  const [price, setPrice] = useState(50);

  const expensivePrice = useMemo(() => {
    return price ** 2;
  }, []);

  return (
    <>
      <p>
        Price {price}, {expensivePrice} $
      </p>
      <button onClick={() => setPrice(price + 1)}>Add price</button>
    </>
  );
}

export default Memo;
