import Start from "@/components/home";
// import Dial from "@/components/dial";
import Projects from "@/components/projects";
import ComingSoon from "@/components/coming-soon";
export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 grid-rows-1 auto-cols-fr gap-y-0 gap-x-[1%] grid-flow-row h-[100vh]">
        <div className="col-start-1" id="home">
          <Start />
        </div>
        <div className="col-start-2">{/* <Dial /> */}</div>
      </section>
      <section className="h-[400vh] w-full" id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ComingSoon />
      </section>
      {/* <section id="home">...</section>
      <section id="about">...</section> */}
    </>
  );
}
