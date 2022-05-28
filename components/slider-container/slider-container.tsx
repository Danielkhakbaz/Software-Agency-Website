import { useCallback, useRef } from "react";
import { useWidthSizeContext } from "../../providers/width-size/width-size-context";
import { useAnimationFrame } from "../../hooks/useAnimationFrame/useAnimationFrame";

type SliderType = {
  children: React.ReactNode;
  initialOffsetX: number;
  contentWidth: number;
};

const SliderContainer: React.FC<SliderType> = ({
  children,
  initialOffsetX,
  contentWidth,
}) => {
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
    <>
      <div
        className="flex flex-1 overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none"
        ref={refContainer}>
        <div className="inline-block" ref={refContent}>
          {children}
        </div>
        <div className={enabled ? "inline-block" : "hidden"}>{children}</div>
      </div>
    </>
  );
};

export default SliderContainer;
