import { useState, useEffect, useCallback } from "react";
import { ScrollContext } from "./scroll-context";

type childrenType = {
  children?: React.ReactNode;
};

const ScrollProvider: React.FC<childrenType> = ({ children }) => {
  const [scroll, setscroll] = useState<number>(0);

  const handleScroll = useCallback(() => {
    setscroll(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
