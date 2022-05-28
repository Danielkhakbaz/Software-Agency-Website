import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { CarouselContext } from "./carousel-context";

type childrenType = {
  children?: React.ReactNode;
  className: string;
};

const CarouselProvider: React.FC<childrenType> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`carousel__viewport max-w-full overflow-hidden ${className}`}>
        <div className="carousel__container flex">{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
