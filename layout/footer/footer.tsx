import Image from "next/image";
import Link from "next/link";
import MargeloLogo from "../../assets/margelo-logo.svg";

type Props = {
  children: React.ReactNode;
};

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <footer className="bg-black text-white flex justify-center items-center py-10 gap-8">
        <Image src={MargeloLogo} width={20} height={20} alt="margelo-logo" />
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/github">Github</Link>
        <Link href="/twitter">Twitter</Link>
      </footer>
    </>
  );
};

export default Footer;
