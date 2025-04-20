export default function ComingSoon() {
  return (
    <div className="h-[100vh] p-10 flex flex-col justify-center">
      <h3 className="font-inter text-9xl">Coming</h3>
      <h3 className="font-playfair italic text-9xl mb-10 -mt-10">soon.</h3>
      <p className="font-inter text-xl mb-4">
        This site is currently under construction. In the meantime,
        <br />
        you can find me on these platforms:
      </p>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 22 22"
          >
            <path
              fill="#FF0061"
              d="M12 1C5.923 1 1 5.923 1 12c0 4.868 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.128-1.554c-.385-.206-.935-.715-.013-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.447-.275-5.005-1.224-5.005-5.431c0-1.197.426-2.187 1.128-2.957c-.11-.275-.495-1.402.11-2.915c0 0 .92-.288 3.024 1.128c.88-.248 1.816-.372 2.75-.372c.936 0 1.87.124 2.75.372c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.22 2.64.11 2.915c.702.77 1.128 1.747 1.128 2.957c0 4.22-2.571 5.156-5.019 5.43c.399.345.743 1.005.743 2.036c0 1.471-.014 2.654-.014 3.025c0 .288.206.632.756.522A11.02 11.02 0 0 0 23 12c0-6.077-4.922-11-11-11"
            />
          </svg>
          <a
            className="font-inter text-[#FF0061] underline"
            href="https://github.com/lssndrrr"
          >
            Github
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="#00EEFF"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
            />
          </svg>
          <a
            className="font-inter text-[#00EEFF] underline"
            href="mailto:agrbusinos@gmail.com"
          >
            Email
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="#E5FF00"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
          <a
            className="font-inter text-[#E5FF00] underline"
            href="https://www.linkedin.com/in/azbusinos/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="text-xl font-inter mt-4">
        ...and you can check my CV{" "}
        <a href="/AlessandraCV.pdf" className="text-[#FF0061] underline italic">
          here!
        </a>
      </div>
    </div>
  );
}
