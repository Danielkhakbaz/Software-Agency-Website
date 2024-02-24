"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { ScrollContext } from "providers/scroll/scroll-context";

type ScrollType = {
  children: ReactNode;
};

const ScrollProvider = ({ children }: ScrollType) => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
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
