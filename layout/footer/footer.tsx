import Link from "next/link";
import Image from "next/image";
import MargeloLogo from "public/margelo-logo.svg";

const Footer = async () => {
  return (
    <footer className="bg-black text-white flex justify-around items-center py-10 md:justify-center md:gap-8">
      <Image src={MargeloLogo} width={20} height={20} alt="margelo-logo" />
      <Link href="/terms">Terms</Link>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/github">Github</Link>
      <Link href="/twitter">Twitter</Link>
    </footer>
  );
};

export default Footer;
