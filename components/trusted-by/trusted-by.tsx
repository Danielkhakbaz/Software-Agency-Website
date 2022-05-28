const TrustedBy: React.FC = () => {
  return (
    <>
      <section className="bg-white min-h-screen flex flex-col justify-content items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl mb-10 font-bold text-center">
            <span className="whitespace-nowrap">trusted by</span>{" "}
            <span className="whitespace-nowrap">the apps on your phone</span>
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="container mx-auto lg:max-w-[70%] lg:px-10">
            <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
              We belive in good communication and a fully transparent
              development process.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;