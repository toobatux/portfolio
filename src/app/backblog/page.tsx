import Image from "next/image";

export default function BackBlog() {
  return (
    <>
      <div
        className={`absolute inset-0 bg-blue-800 bg-[size:20px_20px] opacity-20 blur-[100px] transition-colors duration-500`}
      ></div>
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col items-center justify-between md:p-8">
          <div className="z-10 w-full max-w-7xl justify-between text-sm h-full">
            <div className="animate-slidein [--slidein-delay:500ms] opacity-0">
              <div className="h-full bg-white/5 p-5 m-4 rounded-xl">
                {/* <div className="flex flex-col w-full "> */}
                <div className="flex items-center w-full">
                  {/* Project Image */}
                  <div className="relative min-w-16 h-16 rounded-lg overflow-hidden me-4">
                    <Image
                      src="/backblog.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className="flex flex-col w-full">
                    <p className="block text-gray-200 text-3xl font-bold">
                      BackBlog
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slidein [--slidein-delay:800ms] opacity-0">
              <div className="m-4">
                <div className="text-2xl font-semibold text-gray-200 mb-4">
                  Overview
                </div>
                <div className="h-full bg-white/5 p-5 rounded-xl">
                  <p className=" block text-gray-300">
                    BackBlog is a collaborative movie playlisting app
                    independently developed for both iOS and Android devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
