import Start from "@/components/home";
// import Dial from "@/components/dial";
import ComingSoon from "@/components/coming-soon";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 auto-cols-fr gap-y-0 gap-x-[1%] grid-flow-row h-[100vh]">
        <div className="col-start-1" id="home">
          <Start />
        </div>
        <section className="col-start-2">{/* <Dial /> */}</section>
      </div>
      <section id="contact">
        <ComingSoon />
      </section>
      {/* <section id="home">...</section>
      <section id="about">...</section> */}
    </>
  );
}
