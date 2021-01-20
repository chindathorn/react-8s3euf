import React, { useRef } from "react";
import State from "./useState";
import Effect from "./useEffect";
import Context from "./useContext";
import Ref from "./useRef";
import Reducer from "./useReducer";
import Memo from "./useMemo";
import Callback from "./useCallback";
import ImperativeHandle from "./useImperativeHandle";
import useDisplayName from "./useDebugValue";

function App() {
  const displayName = useDisplayName();

  const ref = useRef(null);

  return (
    <>
      <State />
      <Effect />
      <Context />
      <Ref />
      <Reducer />
      <Memo />
      <Callback />
      <ImperativeHandle ref={ref} />
      <p>{displayName}</p>
    </>
  );
}

export default App;
