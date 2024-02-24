"use client";

import { useState, useCallback, useEffect, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { CarouselContext } from "providers/carousel/carousel-context";

type CarouselType = {
  children: ReactNode;
  className: string;
};

const CarouselProvider = ({ children, className }: CarouselType) => {
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
        className={`carousel__viewport max-w-full overflow-hidden ${className}`}
      >
        <div className="carousel__container flex">{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
