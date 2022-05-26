import type { NextPage } from "next";
import { useEffect } from "react";
import MasterHead from "../components/master-head/master-head";

const Home: NextPage = () => {
  useEffect(() => {
    document.title = "Margelo";
  }, []);

  return (
    <>
      <MasterHead />
    </>
  );
};

export default Home;
