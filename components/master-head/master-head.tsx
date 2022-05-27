import { useRef } from "react";
import Image from "next/image";
import { useScrollContext } from "../../providers/scroll/scroll-context";
import MargeloImage from "../../assets/margelo-logo.svg";
import ArrowDown from "../../assets/arrow-down.webp";

const MasterHead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scroll } = useScrollContext();

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scroll / elContainer.clientHeight);
  }

  return (
    <>
      <div
        className="sticky top-0 flex flex-col items-center justify-center min-h-screen -z-10 bg-gradient-to-r from-slate-300 to-slate-500"
        ref={refContainer}
        style={{ transform: `translateY(-${progress * 20}vh)` }}>
        <div className="flex-grow-0 pt-20 transition-opacity duration-1000 md:pt-10">
          <Image
            src={MargeloImage}
            width={128 / 3}
            height={114 / 3}
            alt="margelo logo"
          />
        </div>
        <div className="flex flex-1 items-center justify-center flex-col font-bold text-white text-center drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
          <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
          <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
            App Development, done right.
          </h2>
        </div>
        <div className="flex-grow-0 pb-20 transition-all duration-1000 md:pb-10">
          <Image
            src={ArrowDown}
            width={188 / 3}
            height={105 / 3}
            alt="arrow down icon"
          />
        </div>
      </div>
    </>
  );
};

export default MasterHead;
