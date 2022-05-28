import type { NextPage } from "next";
import Head from "next/head";
import MasterHead from "../components/master-head/master-head";
import AboutUs from "../components/about-us/about-us";
import Skills from "../components/skills/skills";
import TrustedBy from "../components/trusted-by/trusted-by";
import ContactUs from "../components/contact-us/contact-us";
import Footer from "../components/footer/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Margelo</title>
      </Head>
      <MasterHead />
      <AboutUs />
      <Skills />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
