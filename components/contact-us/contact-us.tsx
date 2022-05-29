import Image from "next/image";
import MargeloImage from "../../assets/margelo-logo.svg";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col justify-content items-center py-6 lg:py-6">
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="pb-10">
            <Image
              src={MargeloImage}
              width={30}
              height={30}
              alt="margelo logo"
            />
          </div>
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <form className="min-w-full flex flex-col gap-4 px-10 mt-16 sm:min-w-[500px] md:min-w-[600px] lg:mt-20">
            <input
              id="companyName"
              name="companyName"
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              required
              maxLength={128}
              type="text"
              placeholder="Company Name"
            />
            <input
              id="email"
              name="email"
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              required
              maxLength={128}
              type="email"
              placeholder="Your E-mail"
            />
            <textarea
              name="message"
              id="message"
              required
              maxLength={1048576}
              placeholder="Additional Information"
              className="min-h-[16em] bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6"
            />
            <div className="text-center">
              <button
                className="bg-white text-black rounded-3xl px-8 py-2"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
