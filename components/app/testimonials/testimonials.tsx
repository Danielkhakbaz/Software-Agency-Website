import Carousel from "components/app/testimonials/carousel/carousel";
import Review from "components/app/testimonials/review/review";
import CarouselProvider from "providers/carousel/carousel-provider";
import { reviews } from "constants/app/testimonials";

const Testimonials = async () => {
  return (
    <CarouselProvider className="bg-black text-white py-10 lg:py-20">
      {reviews.map(({ by, text }, index) => (
        <Carousel key={by} index={index}>
          <Review by={by}>{text}</Review>
        </Carousel>
      ))}
    </CarouselProvider>
  );
};

export default Testimonials;
