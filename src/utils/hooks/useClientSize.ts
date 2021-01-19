import React, { useEffect, useState } from "react";

interface useClientSizeType {
  width: number;
  height: number;
}

const useClientSize = (
  dependency: any[],
  targetRef: React.MutableRefObject<HTMLElement | null>
) => {
  const [size, setSize] = useState<useClientSizeType>({ width: 0, height: 0 });

  useEffect(() => {
    if (targetRef && targetRef.current) {
      setSize({
        width: targetRef.current.clientWidth,
        height: targetRef.current.clientHeight,
      });
    }
  }, [...dependency]);
  return [size];
};

export default useClientSize;
