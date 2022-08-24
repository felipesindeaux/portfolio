import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import HomeSection from "../components/Home";

const Home: NextPage = () => {
  return (
    <div id="main">
      <Head>
        <title>Felipe Sindeaux</title>
        <meta name="description" content="Portifólio de Felipe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeSection/>
    </div>
  );
};

export default Home;
