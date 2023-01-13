import type { GetStaticProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ProjectsProvider } from "contexts/projectsContext";

import { IProjects } from "types";

import { ProjectsService } from "services/queries/projects";

import { Home } from "templates/Home";

const HomePage: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  return (
    <ProjectsProvider projects={projects}>
      <Home />
    </ProjectsProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) return { props: { projects: [] } };

  const format = locale.replace("-", "_");

  const { data } = await ProjectsService.getProjects(
    locale === "pt-BR" ? "en_US" : format
  );

  return {
    props: {
      projects: data.projects,
      ...(await serverSideTranslations(locale as any, ["common"], null, [
        "en",
        "es",
        "pt",
      ])),
    },
    revalidate: 60 * 60 * 8,
  };
};

export default HomePage;
