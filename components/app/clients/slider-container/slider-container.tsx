"use client";

import { useCallback, useRef } from "react";
import { useAnimationFrame } from "hooks/useAnimationFrame/useAnimationFrame";
import { useWidthSizeContext } from "providers/width-size/width-size-context";

type SliderContainerProps = {
  children: React.ReactNode;
  initialOffsetX: number;
  contentWidth: number;
};

const SliderContainer = ({
  children,
  initialOffsetX,
  contentWidth,
}: SliderContainerProps) => {
  const { widthSize } = useWidthSizeContext();

  const refScrollX = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = widthSize < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className="max-w-full flex flex-1 overflow-x-hidden whitespace-nowrap pointer-events-none my-8"
    >
      <div className="inline-block" ref={refContent}>
        {children}
      </div>
      <div className={enabled ? "inline-block" : "hidden"}>{children}</div>
    </div>
  );
};

export default SliderContainer;
