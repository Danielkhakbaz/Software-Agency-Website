import { useCallback } from "react";
import { useCarouselContext } from "../../providers/carousel/carousel-context";
import styles from "../../styles/modules/carousel.module.css";

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
        className={`${styles.carousel__slide} ${
          isActive && `${styles.active}`
        }`}
        onClick={handleClick}>
        {children}
      </div>
    </>
  );
};

export default Carousel;
