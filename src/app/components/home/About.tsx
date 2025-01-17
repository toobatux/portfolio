import Skills from "./Skills";

const About = () => {
  return (
    <>
      {/* bg-gradient-to-tl from-transparent to-white/5 */}
      <div className="border border-white/10 transition-colors duration-200 rounded-3xl p-4 h-full">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="w-full items-center">
            <p className="inline-block text-neutral-100 py-1.5 px-3 border border-white/20 rounded-xl">
              Skills
            </p>
          </div>
          <div className="flex py-4 lg:py-0">
            <div className="relative overflow-hidden">
              <div className="flex">
                <div className="anim-group">
                  <Skills />
                </div>
                <div aria-hidden className="anim-group">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-white/90 text-base">
              Technology I'm working with
            </div>
            <div className="text-white/50">
              I am always excited to learn something new!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
