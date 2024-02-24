"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { WidthSizeContext } from "providers/width-size/width-size-context";

type WidthSizeType = {
  children: ReactNode;
};

const WidthSizeProvider = ({ children }: WidthSizeType) => {
  const [widthSize, setWidthSize] = useState<number>(0);

  const handleResize = useCallback(() => {
    setWidthSize(window.innerWidth);
  }, []);

  useEffect(() => {
    document.addEventListener("resize", handleResize, { passive: true });

    return () => document.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <WidthSizeContext.Provider value={{ widthSize }}>
      {children}
    </WidthSizeContext.Provider>
  );
};

export default WidthSizeProvider;
