import Skills from "./Skills";

const TechStack = () => {
  return (
    <>
      {/* bg-linear-to-tl from-transparent to-white/5 */}
      <div className="bg-transparent rounded-2xl border border-white/10 p-6 transition-colors duration-200 h-80">
        <div className="flex w-full flex-col justify-between">
          <div className="w-full items-center space-y-1 mb-4 lg:mb-0">
            {/* <p className="inline-block text-white/50 py-1 px-3 border-2 border-white/10 rounded">
              Skills
            </p> */}
            <div className="text-white/90 text-base">
              {`Technology I'm working with`}
            </div>
            <div className="text-white/65">
              {`I'm always excited to learn something new!`}
            </div>
          </div>
          <div className="flex h-full items-center py-4">
            <div className="relative overflow-hidden">
              <div className="flex">
                <div className="anim-group">
                  <Skills />
                </div>
                <div aria-hidden className="anim-group">
                  <Skills />
                </div>
              </div>
              <div className="absolute inset-0 z-20 w-full h-full bg-linear-to-r from-black via-transparent to-black"></div>
            </div>
          </div>
          {/* <div className="space-y-1"> */}
          {/* <hr className="border border-white/15 mb-4" /> */}
          {/* <div className="text-white/90 text-base">
              {`Technology I'm working with`}
            </div> */}
          {/* <div className="text-white/50">
              {`I'm always excited to learn something new!`}
            </div> */}
          {/* </div> */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
