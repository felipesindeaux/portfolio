import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HomeSection from "../components/Home";
import Projects from "../components/Projects";
import Techs from "../components/Techs";

const Home: NextPage = () => {
  return (
    <div id="main">
      <Head>
        <title>Felipe Sindeaux</title>
        <meta name="description" content="Portifólio de Felipe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeSection />
      <Techs />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
