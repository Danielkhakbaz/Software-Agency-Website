import { useState, useEffect, useCallback } from "react";
import { WidthSizeContext } from "./width-size-context";

type childrenType = {
  children?: React.ReactNode;
};

const WidthSizeProvider: React.FC<childrenType> = ({ children }) => {
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
