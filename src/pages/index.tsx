import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "../components/UI/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import HomePortfolio from "../components/Sections/HomePortfolio";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import ButtonTop from "../components/UI/ButtonTop";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Caixeta front end</title>
        <meta name="description" content="Portfolio Caixeta" />
      </Head>
      <Navbar />
      <HomePortfolio />
      <About />
      <Skills />
      <ButtonTop />
    </ThemeProvider>
  );
};

export default Home;
