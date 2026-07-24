export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-24 md:px-16 max-w-[1200px] mx-auto min-h-screen">
      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center pt-8">
        <img
          src="/aathi.png"
          alt="Aathi portrait"
          className="h-[500px] w-[370px] object-cover"
          draggable="false"
        />
      </div>

      <div className="flex flex-col gap-6 md:w-2/3">
        <h2 className="text-[32px] md:text-[40px] font-bold text-title leading-tight">
          About Me
        </h2>

        <div className="flex flex-col gap-5 text-[16px] md:text-[18px] text-subtitle leading-relaxed font-normal">
          <p>
            I'm a Stats & Economics student at the University of Toronto.
            Right now I'm working as a Data Engineer at RBC.
            Some of my areas of interest are in AI, ML, Data, Fintech, AI Safety, and SWE.
          </p>

          <p>
            Outside of school and work, I like to boulder, play badminton, and hit the gym. I've been consistent with training over the past year and it's been fun seeing the progress.
          </p>

          <p>
            When I'm not doing that, you'll probably find me watching anime or spending money on random food spots!
          </p>
        </div>
      </div>
    </section>
  );
}
