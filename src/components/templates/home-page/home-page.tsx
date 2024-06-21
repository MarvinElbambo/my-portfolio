import Head from "next/head";
import { Inter } from "next/font/google";
import MainNavigation from "@/components/organisms/main-navigation/main-navigation";
import Hero from "@/components/organisms/hero/hero";
import SkillList from "@/components/organisms/skill-list/skill-list";
import ProjectList from "@/components/organisms/project-list/project-list";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Marvin Elbambo Portfolio</title>
        <meta name="description" content="Marvin Elbambo Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={inter.className}>
        <MainNavigation />

        <Hero />

        <SkillList />

        <ProjectList />
      </main>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
