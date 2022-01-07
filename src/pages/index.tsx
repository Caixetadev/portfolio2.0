import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "../components/UI/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import HomePortfolio from "../components/Sections/HomePortfolio";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import ButtonTop from "../components/UI/ButtonTop";
import Projects from "../components/Sections/Projects";
import Footer from "../components/UI/Footer";
import { ReactNode, ReactPropTypes } from "react";

export async function getStaticProps() {
  const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");
  const data: string[] = await url.json();

  return {
    props: { projects: data },
  };
}

const Home: NextPage = ({ projects }) => {
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
      <Projects projects={projects} />
      <ButtonTop />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
