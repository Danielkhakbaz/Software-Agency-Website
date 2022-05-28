import { useCallback } from "react";
import { useCarouselContext } from "../../providers/carousel/carousel-context";

type CarouselType = {
  children: JSX.Element;
  index: number;
};

const Carousel: React.FC<CarouselType> = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useCarouselContext();

  const isActive = selectedIndex === index;

  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, index]);

  return (
    <>
      <div
        className={`carousel__slide relative ${isActive ? "active" : ""}`}
        onClick={handleClick}>
        {children}
      </div>
    </>
  );
};

export default Carousel;
