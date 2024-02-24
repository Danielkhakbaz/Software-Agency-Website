import { ComponentType, ReactNode } from "react";

type ComposeProps = {
  providers: Array<ComponentType | ReactNode>;
  children: ReactNode;
};

const Compose = async ({ providers, children }: ComposeProps) => {
  return (
    <>
      {providers.reverse().reduce((acc: ReactNode, curr: unknown) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}];
        return <Provider {...props}>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Compose;
