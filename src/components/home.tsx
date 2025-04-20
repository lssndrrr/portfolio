export default function Start() {
  return (
    <section className="flex flex-col p-10 gap-16 -pt-10 -mt-6 justify-center h-[100vh]">
      <header className="font-playfair">
        <p className="text-7xl">Welcome to my</p>
        <p className="text-9xl italic -mt-4">space.</p>
      </header>
      <div className="flex flex-col gap-2">
        <p className="font-inter text-xl">
          Hello there! I am <i className="text-[#E5FF00]">Alessandra</i>, a
          computer science student at UP Cebu who <i>loves</i> turning great
          ideas into reality through <i>even better</i> code.
        </p>
        <p className="font-inter text-xl">
          {`I am currently broadening my horizons across different areas of
          computer science, like in the fields of AI and ML. I am also
          continuously expanding my toolkit with new technologies (you can't go
          wrong with having a few more under your belt!). With that, I am always
          on the lookout for internships or collaborations that will help me
          with my current goal.`}
        </p>
      </div>
    </section>
  );
}

//  Reach out through the{" "} <a href="#contacts">contacts</a> page!
