import ClientsLogos from "./clients-logos/clients-logos";

const Clients: React.FC = () => {
  return (
    <>
      <section className="min-h-screen bg-white flex flex-col justify-content items-center">
        <div className="flex flex-1 flex-col justify-center items-center my-10 md:my-18">
          <h3 className="text-xl font-bold text-center mb-10">
            <span className="whitespace-nowrap">trusted by</span>{" "}
            <span className="whitespace-nowrap">the apps on your phone</span>
          </h3>
        </div>
        <ClientsLogos />
        <div className="flex flex-1 flex-col justify-center items-center my-10 md:my-18">
          <div className="container mx-auto lg:max-w-[70%] lg:px-10">
            <h3 className="text-3xl !leading-[3.5rem] tracking-tight text-center px-10 lg:text-4xl">
              We belive in good communication and a fully transparent
              development process.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
