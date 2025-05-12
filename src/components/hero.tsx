export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="hero-gradient py-16 text-white md:py-24">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="mb-8 px-10 md:mb-0 md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Turning Ideas Into Digital Reality
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              We are a team of expert full-stack developers dedicated to
              creating robust, scalable web solutions that drive business
              growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="rounded-lg bg-white px-6 py-3 text-center font-medium text-indigo-600 transition duration-300 hover:bg-gray-100">
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="rounded-lg border border-white px-6 py-3 text-center font-medium text-white transition duration-300 hover:bg-white hover:text-indigo-600">
                View Our Work
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="Web Development Team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
