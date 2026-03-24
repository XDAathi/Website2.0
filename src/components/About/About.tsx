export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-24 md:px-16 max-w-[1200px] mx-auto min-h-screen">
      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center pt-2 md:-mt-10">
        <img
          src="/aathi.png"
          alt="Aathi portrait"
          className="h-[560px] w-[410px] object-cover md:h-[620px] md:w-[460px]"
          draggable="false"
        />
      </div>

      <div className="flex flex-col gap-6 md:w-2/3">
        <h2 className="text-[32px] md:text-[40px] font-bold text-title leading-tight">
          About Me
        </h2>

        <div className="flex flex-col gap-5 text-[16px] md:text-[18px] text-subtitle leading-relaxed font-normal">
          <p>
            I'm a 2nd-year Stats & Economics student at the University of Toronto.
            Right now I'm working as a Data Analytics & AI Intern @OCNI, and I'll be joining RBC as a Data Analyst Intern soon.
          </p>

          <p>
            On campus, I stay pretty involved. I'm the Marketing Lead for Google Developer Group @UTSC and also part of the Swim Club.
          </p>

          <p>
            Outside of school and work, I like to swim, play badminton, and hit the gym. I've been consistent with training over the past year and it's been fun seeing the progress.
          </p>

          <p>
            When I'm not doing that, you'll probably find me watching anime, building LEGO, or queuing ranked on val.
          </p>

          <p>
            Lately I've been wanting to get back into hiking and rock climbing, and one of my big goals for my 20s is to travel more and explore different countries!!
          </p>
        </div>
      </div>
    </section>
  );
}
