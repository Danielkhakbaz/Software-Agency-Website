type SliderItemTypes = {
  children: React.ReactNode;
  width: number;
};

const SliderItem: React.FC<SliderItemTypes> = ({ children, width }) => {
  return (
    <>
      <div
        className="inline-flex justify-center items-center mx-4"
        style={{ width }}>
        {children}
      </div>
    </>
  );
};

export default SliderItem;
