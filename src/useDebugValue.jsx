import { useEffect, useState, useDebugValue } from "react";

function useDisplayName() {
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    const data = ["da", "sa", "ka", "ga"];
    setDisplayName(data);
  }, []);

  useDebugValue(displayName ?? "loading...");

  return displayName;
}

export default useDisplayName;
