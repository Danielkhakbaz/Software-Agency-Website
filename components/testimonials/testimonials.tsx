import CarouselProvider from "../../providers/carousel/carousel-provider";
import Carousel from "../carousel/carousel";
import Review from "../review/review";

const Testimonials: React.FC = () => {
  return (
    <>
      <CarouselProvider className="bg-black text-white py-10 lg:py-20">
        <Carousel index={0}>
          <Review by="Axel (Showtime) 1">
            Margelo and Showtime both share the love for high-quality software
            and the passion for building something people want.
          </Review>
        </Carousel>
        <Carousel index={1}>
          <Review by="Axel (Showtime) 2">
            Margelo and Showtime both share the love for high-quality software
            and the passion for building something people want.
          </Review>
        </Carousel>
        <Carousel index={2}>
          <Review by="Axel (Showtime) 3">
            Margelo and Showtime both share the love for high-quality software
            and the passion for building something people want.
          </Review>
        </Carousel>
        <Carousel index={3}>
          <Review by="Axel (Showtime) 4">
            Margelo and Showtime both share the love for high-quality software
            and the passion for building something people want.
          </Review>
        </Carousel>
        <Carousel index={4}>
          <Review by="Axel (Showtime) 5">
            Margelo and Showtime both share the love for high-quality software
            and the passion for building something people want.
          </Review>
        </Carousel>
        <Carousel index={5}>
          <Review by="Axel (Showtime) 6">
            Margelo and Showtime both share the love for high-quality software
            and the passion for building something people want.
          </Review>
        </Carousel>
      </CarouselProvider>
    </>
  );
};

export default Testimonials;
