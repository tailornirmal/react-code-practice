/*
        useMemo
        React.Memo
        useCallback
    */

import { useCallback, useState } from "react";
import { UseCallBackComponent } from "./useCallBackComponent";

export const PerformanceHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>count : {count}</p>
      <UseCallBackComponent handleClick={handleClick} />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
