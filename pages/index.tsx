import type { NextPage } from "next";
import Head from "next/head";
import MasterHead from "../components/master-head/master-head";
import AboutUs from "../components/about-us/about-us";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Margelo</title>
      </Head>
      <MasterHead />
      <AboutUs />
    </>
  );
};

export default Home;
