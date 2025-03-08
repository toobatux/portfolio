import Skills from "./Skills";

const TechStack = () => {
  return (
    <>
      {/* bg-gradient-to-tl from-transparent to-white/5 */}
      <div className="border-2 border-white/10 transition-colors duration-200 rounded-[18px] p-4 h-full">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="w-full items-center space-y-1 mb-4 lg:mb-0">
            {/* <p className="inline-block text-white/50 py-1 px-3 border-2 border-white/10 rounded">
              Skills
            </p> */}
            <div className="text-white/90 text-base">
              {`Technology I'm working with`}
            </div>
            <div className="text-white/50">
              {`I'm always excited to learn something new!`}
            </div>
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
              <div className="absolute inset-0 z-20 w-full h-full bg-gradient-to-r from-black via-transparent to-black"></div>
            </div>
          </div>
          <div className="space-y-1">
            {/* <hr className="border-1 border-white/15 mb-4" /> */}
            {/* <div className="text-white/90 text-base">
              {`Technology I'm working with`}
            </div> */}
            {/* <div className="text-white/50">
              {`I'm always excited to learn something new!`}
            </div> */}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
