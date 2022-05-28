import { createContext, useContext } from "react";
import { EmblaCarouselType } from "embla-carousel-react";

type CarouselContextType = {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
};

const CarouselContextdefaultValue: CarouselContextType = {
  embla: undefined,
  selectedIndex: 0,
};

export const CarouselContext = createContext(CarouselContextdefaultValue);

export const useCarouselContext = () => useContext(CarouselContext);
