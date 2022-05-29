import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/landing/landing";
import AboutTeam from "../components/about-team/about-team";
import Skills from "../components/skills/skills";
import Clients from "../components/clients/clients";
import Testimonials from "../components/testimonials/testimonials";
import ContactUs from "../components/contact-us/contact-us";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Margelo</title>
      </Head>

      <>
        <Landing />
        <AboutTeam />
        <Skills />
        <Clients />
        <Testimonials />
        <ContactUs />
      </>
    </>
  );
};

export default Home;
