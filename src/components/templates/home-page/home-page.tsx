import Head from "next/head";
import { Inter } from "next/font/google";
import MainNavigation from "@/components/organisms/main-navigation/main-navigation";

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
      </main>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
