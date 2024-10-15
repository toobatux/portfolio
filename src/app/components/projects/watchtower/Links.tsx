import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";

const Links = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        <Link
          href="https://github.com/toobatux/CS351-OpenCV-Cam"
          target="_blank"
          prefetch={false}
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-2 hover:bg-white/10">
            <div className="flex items-center p-1">
              <div className="p-1 me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-neutral-200"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="text-neutral-200 ">OpenCV</div>
              <div className="text-neutral-200 ml-auto">
                <ArrowOutward fontSize="small" />
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="https://github.com/toobatux/CS351-PiCam2"
          target="_blank"
          prefetch={false}
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-2 hover:bg-white/10">
            <div className="flex items-center p-1">
              <div className="p-1 me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-neutral-200"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="text-neutral-200 ">PiCamera2</div>
              <div className="text-neutral-200 ml-auto">
                <ArrowOutward fontSize="small" />
              </div>
            </div>
          </div>
        </Link>

        {/* <Link href="" prefetch={false}>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-2">
            <div className="flex items-center p-1">
              <div className="p-1 me-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 56 56"
                  className="fill-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 C 47.7109 21.4844 47.3828 20.1718 45.5078 18.2500 L 32.5703 5.1015 C 30.7891 3.2734 29.3359 2.8750 26.6875 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 15.7422 49.3515 C 13.3281 49.3515 12.0625 48.0625 12.0625 45.7187 L 12.0625 10.3047 C 12.0625 7.9844 13.3281 6.6484 15.7656 6.6484 L 26.1718 6.6484 L 26.1718 20.2656 C 26.1718 23.2187 27.6718 24.6718 30.5781 24.6718 L 43.9375 24.6718 L 43.9375 45.7187 C 43.9375 48.0625 42.6953 49.3515 40.2578 49.3515 Z M 31.0000 21.1328 C 30.0859 21.1328 29.7109 20.7578 29.7109 19.8203 L 29.7109 7.3750 L 43.2109 21.1328 Z"></path>
                  </g>
                </svg>
              </div>
              <div className="text-neutral-200">Docs</div>
              <div className="text-neutral-200 ml-auto">
                <ArrowOutward fontSize="small" />
              </div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Links;
