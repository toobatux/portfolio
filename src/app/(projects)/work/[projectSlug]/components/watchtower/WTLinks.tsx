import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";

const WTLinks = () => {
  return (
    // <div className="relative">
    //   <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
    //     <Link
    //       href="https://github.com/toobatux/CS351-OpenCV-Cam"
    //       target="_blank"
    //       prefetch={false}
    //     >
    //       <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-2 hover:bg-white/10">
    //         <div className="flex items-center p-1">
    //           <div className="p-1 me-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               className="fill-neutral-200"
    //             >
    //               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    //             </svg>
    //           </div>
    //           <div className="text-neutral-200 ">OpenCV</div>
    //           <div className="text-neutral-200 ml-auto">
    //             <ArrowOutward fontSize="small" />
    //           </div>
    //         </div>
    //       </div>
    //     </Link>

    //     <Link
    //       href="https://github.com/toobatux/CS351-PiCam2"
    //       target="_blank"
    //       prefetch={false}
    //     >
    //       <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-2 hover:bg-white/10">
    //         <div className="flex items-center p-1">
    //           <div className="p-1 me-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               className="fill-neutral-200"
    //             >
    //               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    //             </svg>
    //           </div>
    //           <div className="text-neutral-200 ">PiCamera2</div>
    //           <div className="text-neutral-200 ml-auto">
    //             <ArrowOutward fontSize="small" />
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <section className="h-full">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
          <Link
            href="https://github.com/toobatux/CS351-OpenCV-Cam"
            target="_blank"
            prefetch={false}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[18px] shadow-lg p-2 hover:bg-white/10 transition-colors">
              <div className="flex p-3">
                <div className="flex flex-col gap-1">
                  <div className="text-white/55 text-xs">OpenCV</div>
                  <div className="text-white/90 text-sm">
                    toobatux/CS351-OpenCV-Cam
                  </div>
                  <div className="text-white/55 text-xs">
                    An MJPEG livestreaming website with motion detection
                  </div>
                </div>
                <div className="text-white/90 ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white/90"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="https://github.com/toobatux/CS351-PiCam2"
            target="_blank"
            prefetch={false}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[18px] shadow-lg p-2 hover:bg-white/10 transition-colors">
              <div className="flex p-3">
                <div className="flex flex-col gap-1">
                  <div className="text-white/55 text-xs">PiCamera2</div>
                  <div className="text-white/90 text-sm">
                    toobatux/CS351-PiCam2
                  </div>
                  <div className="text-white/55 text-xs">
                    An MJPEG livestreaming website, uses PiCamera2
                  </div>
                </div>
                <div className="text-white/90 ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white/90"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WTLinks;
