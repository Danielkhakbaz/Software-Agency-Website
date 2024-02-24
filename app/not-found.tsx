import Link from "next/link";
import Image from "next/image";
import MargeloLogo from "public/margelo-logo.svg";
import { MdOutlineHome } from "react-icons/md";

const NotFound = async () => {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-center">
      <header className="absolute top-0 pt-10">
        <Image
          src={MargeloLogo}
          width={128 / 3}
          height={114 / 3}
          alt="margelo logo"
        />
      </header>
      <strong className="text-6xl">Oops!</strong>
      <p className="text-2xl">404 - Page not found!</p>
      <Link href="/">
        <button className="bg-white text-black flex flex-row justify-center items-center gap-2 text-center rounded-3xl px-6 py-2">
          <MdOutlineHome className="text-xl" />
          <span>Back to home</span>
        </button>
      </Link>
    </main>
  );
};

export default NotFound;
