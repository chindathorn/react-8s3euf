import React, { useState, useEffect } from "react";

function Effect() {
  const [like, setLike] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    alert("hello side effect");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);

  useEffect(() => {
    console.log("life long my Hook");
    return () => console.log("goodbye component!");
  });

  return (
    <button disabled={!loaded} onClick={() => setLike(like + 1)}>
      {like} Likes
    </button>
  );
}

export default Effect;
