import { createContext, useContext } from "react";

type WidthSizeContextType = {
  widthSize: number;
};

const WidthScrollContextdefaultValue: WidthSizeContextType = {
  widthSize: 0,
};

export const WidthSizeContext = createContext(WidthScrollContextdefaultValue);

export const useWidthSizeContext = () => useContext(WidthSizeContext);
