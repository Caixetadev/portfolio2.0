import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Aos from "aos";
import "aos/dist/aos.css";

import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

import Navbar from "../components/UI/Navbar";
import HomePortfolio from "../components/Sections/HomePortfolio";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import ButtonTop from "../components/UI/ButtonTop";
import Projects from "../components/Sections/Projects";
import Footer from "../components/UI/Footer";

import { IProjects } from "../types";
import Contact from "../components/Sections/Contact";
import { useEffect } from "react";
import Header from "../components/Head";

export const getStaticProps: GetStaticProps = async () => {
  const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");

  const data: IProjects = await url.json();

  return {
    props: { projects: data },
  };
};

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HomePortfolio />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <ButtonTop />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
