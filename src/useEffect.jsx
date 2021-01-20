import React, { useState, useEffect } from "react";

function Effect() {
  const [like, setLike] = useState(3);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   alert("hello side effect");
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      if (like >= 1 && !loaded) setLike(like - 1);
      console.log(like);
      if (like === 0) setLoaded(true);
    }, 1000);
  }, [loaded, like]);

  useEffect(() => {
    console.log("life long my Hook");
    return () => console.log("goodbye component!");
  });

  return (
    <>
      <p />
      <button disabled={!loaded} onClick={() => setLike(like + 1)}>
        👍 {like} Likes
      </button>
    </>
  );
}

export default Effect;
