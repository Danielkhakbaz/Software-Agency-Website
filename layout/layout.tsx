import Footer from "./footer/footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Footer>{children}</Footer>
    </>
  );
};

export default Layout;
