import Head from "next/head";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 | Margelo</title>
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <strong className="text-5xl lg:text-8xl">Oops!</strong>
              <p className="text-3xl my-10 lg:text-4xl">
                404 - Page not found!
              </p>
              <Link href="/">
                <button className="btn btn-primary btn-sm xl:btn-lg">
                  <MdOutlineHome className="text-2xl mr-1" />
                  <span>Back to home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
