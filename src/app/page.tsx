import Fun from "@/Components/Mystack";
import Main from "@/Components/Main";
import Testimonials from "@/Components/Testimonials";
import ProjectsCard from "@/Components/ProjectsCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
      <Fun />
      <Testimonials />
      <ProjectsCard />
    </>
  );
}
