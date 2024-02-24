"use client";

import { useCallback, ReactNode } from "react";
import { useCarouselContext } from "providers/carousel/carousel-context";
import styles from "styles/modules/carousel.module.css";

type CarouselProps = {
  children: ReactNode;
  index: number;
};

const Carousel = ({ children, index }: CarouselProps) => {
  const { embla: emblaApi, selectedIndex } = useCarouselContext();

  const isActive = selectedIndex === index;

  const handleClick = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi, index]);

  return (
    <div
      className={`${styles.carousel__slide} ${isActive && `${styles.active}`}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Carousel;
