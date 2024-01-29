import AppBar from "./components/app-bar";
import About from "./components/about";
import WorkHistory from "./components/experience/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <AppBar />
      <main className="flex flex-col items-center justify-between p-8 lg:p-24 bg-black text-neutral-300">
        <About />
        <WorkHistory />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
