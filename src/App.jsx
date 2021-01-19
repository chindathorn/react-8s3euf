import React from "react";
import State from "./useState";
import Effect from "./useEffect";
import Context from "./useContext";
import Ref from "./useRef";
import Reducer from "./useReducer";
import useDisplayName from "./useDebugValue";

function App() {
  const displayName = useDisplayName();

  return (
    <>
      <State />
      <Effect />
      <Context />
      <Ref />
      <Reducer />
      <p>{displayName}</p>
    </>
  );
}

export default App;
