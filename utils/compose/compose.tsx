type Props = {
  providers: Array<React.ComponentType | React.ReactNode>;
  children: React.ReactNode;
};

const Compose: React.FC<Props> = ({ providers, children }) => {
  return (
    <>
      {providers.reverse().reduce((acc: React.ReactNode, curr: unknown) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}];
        return <Provider {...props}>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Compose;
