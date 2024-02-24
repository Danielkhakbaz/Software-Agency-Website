import { ReactNode } from "react";

type ReviewProps = {
  children: ReactNode;
  by: string;
};

const Review = async ({ children, by }: ReviewProps) => {
  return (
    <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
      <div className="text-xl leading-10 tracking-tight md:text-2xl lg:leading-[3rem]">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6">&mdash; {by}</div>
    </div>
  );
};

export default Review;
