import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/margelo-logo.svg";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black text-white flex justify-center items-center gap-12 p-20">
        <Image src={Logo} width={20} height={20} alt="logo" />
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/github">Github</Link>
        <Link href="/twitter">Twitter</Link>
      </footer>
    </>
  );
};

export default Footer;
