import { useRef } from "react";
import { useScrollContext } from "../../providers/scroll/scroll-context";
import styles from "../../styles/modules/skills.module.css";

const opacityForBlock = (sectionProgress: number, blockNumber: number) => {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }
  return 0.2;
};

const Skills: React.FC = () => {
  const { scroll } = useScrollContext();

  const refContainer = useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;

  const numberOfBlocks = 3;
  let progress = 0;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfScreenHeight = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scroll - offsetTop) + halfScreenHeight
      ) / clientHeight;

    progress = Math.min(
      numberOfBlocks - 0.5,
      Math.max(0.5, percentY * numberOfBlocks)
    );
  }

  return (
    <>
      <section className="bg-black text-white" ref={refContainer}>
        <div className="max-w-5xl min-h-screen text-4xl font-semibold flex flex-col justify-center items-center tracking-tight mx-auto my-auto px-10 py-14 md:text-6xl lg:text-7xl lg:px-20">
          <div className="leading-[1.15]">
            <div
              className={styles.skills__text}
              style={{ opacity: opacityForBlock(progress, 0) }}>
              We know our tools inside out.
            </div>
            <span
              className={`${styles.skills__text} inline-block my-5 after:content-['_']`}
              style={{ opacity: opacityForBlock(progress, 1) }}>
              Our team has contributed 258 commits to React Native core,
              powering thousands of apps worldwide.
            </span>
            <span
              className={`${styles.skills__text} inline-block`}
              style={{ opacity: opacityForBlock(progress, 2) }}>
              We&apos;re maintaing some of the most popular open-source
              projects, with over <strong>29</strong> million downloads.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
