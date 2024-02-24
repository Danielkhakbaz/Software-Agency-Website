"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { useScrollContext } from "providers/scroll/scroll-context";
import MargeloImage from "public/margelo-logo.svg";
import ArrowDown from "public/arrow-down.webp";
import styles from "styles/modules/landing.module.css";

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const refContainer = useRef<HTMLDivElement>(null);

  const { scroll } = useScrollContext();

  let progress = 0;

  if (refContainer.current) {
    progress = Math.min(1, scroll / refContainer.current.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      className={`${styles.landing__background} min-h-screen flex flex-col justify-center items-center sticky top-0 -z-10`}
      ref={refContainer}
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <div
        className={`flex-grow-0 transition-opacity duration-1000 pt-10 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={MargeloImage}
          width={128 / 3}
          height={114 / 3}
          alt="margelo logo"
        />
      </div>
      <div
        className={`text-white font-bold flex flex-1 flex-col justify-center items-center text-center transition-all duration-1000 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl mb-6 lg:text-5xl">Margelo</h1>
        <h2 className="text-2xl tracking-tight mb-2 lg:text-3xl">
          App Development, done right.
        </h2>
      </div>
      <div
        className={`flex-grow-0 transition-all duration-1000 pb-10 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src={ArrowDown}
          alt="arrow down icon"
          onLoad={handleImageLoaded}
          style={{
            width: "50%",
            height: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
