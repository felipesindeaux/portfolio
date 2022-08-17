import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felipe Sindeaux</title>
        <meta name="description" content="Portifólio de Felipe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
