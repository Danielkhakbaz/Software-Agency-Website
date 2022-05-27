import { createContext, useContext } from "react";

type ScrollContextType = {
  scroll: number;
};

const ScrollContextdefaultValue: ScrollContextType = {
  scroll: 0,
};

export const ScrollContext = createContext(ScrollContextdefaultValue);

export const useScrollContext = () => useContext(ScrollContext);
