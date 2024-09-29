import TitleCard from "@/app/components/projects/TitleCard";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import BackBlogPic from "/public/backblog.png";
import SysDiagram from "/public/backblog.drawio.png";

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
      <div className="animate-slidein [--slidein-delay:500ms] opacity-0">
        <TitleCard
          src={BackBlogPic}
          title="BackBlog"
          date="2023-2024"
          tools={tools}
        />
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="https://github.com/toobatux/backblog"
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
                  <div className="text-gray-200 ">Android</div>
                  <div className="text-gray-200 ml-auto">
                    <ArrowOutward fontSize="small" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://github.com/nickab56/SeniorProject"
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
                  <div className="text-gray-200 ">iOS</div>
                  <div className="text-gray-200 ml-auto">
                    <ArrowOutward fontSize="small" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://www.figma.com/design/zuyfQoJfjZdQgTT1U7z4JF/BackBlog1?node-id=2380-2018&t=rWccTdd83zasEWg3-1"
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
                      viewBox="0 0 384 512"
                      className="fill-gray-200"
                    >
                      <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" />
                    </svg>
                  </div>
                  <div className="text-gray-200">Figma</div>
                  <div className="text-gray-200 ml-auto">
                    <ArrowOutward fontSize="small" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="h-full bg-white/5 p-5 rounded-xl"></div> */}
        <div className="animate-slidein [--slidein-delay:800ms] opacity-0">
          <div className="mb-6 lg:mb-8">
            <div className="text-2xl font-semibold text-gray-200 mb-4">
              Overview
            </div>
            <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
              <p className="block mb-4">
                BackBlog is a{" "}
                <span className="text-blue-500 font-semibold">
                  {" "}
                  collaborative movie playlisting app
                </span>{" "}
                independently developed for both iOS and Android devices.
              </p>
              <p className="block mb-4">
                The app aims to make organizing movie watchlists easy and fun!
              </p>
              <p className="block mb-2 text-lg font-semibold">Users can:</p>
              <ul className="list-disc ps-5">
                <li>Create movie logs solo or with friends</li>
                <li>Search thousands of movies</li>
                <li>Keep track of which movies have been watched</li>
                <li>Generate random list orders to easily choose a movie</li>
                <li>Discover what friends are watching</li>
              </ul>
              {/* <p className="block">
                      This project was created by a group of four students over
                      the course of an academic year as a senior capstone
                      project.
                    </p> */}
            </div>
          </div>
        </div>
        <div className="animate-slidein [--slidein-delay:1000ms] opacity-0">
          <div className="mb-6 lg:mb-8">
            <div className="text-2xl font-semibold text-gray-200 mb-4">
              System
            </div>
            <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
              <p className="block mb-2">
                The app was developed for Android devices using{" "}
                <span className="text-blue-500 hover:text-blue-400 underline">
                  <Link
                    href="https://kotlinlang.org/"
                    target="_blank"
                    prefetch={false}
                  >
                    Kotlin
                  </Link>
                </span>{" "}
                and{" "}
                <span className="text-blue-500 hover:text-blue-400 underline">
                  <Link
                    href="https://developer.android.com/compose"
                    target="_blank"
                    prefetch={false}
                  >
                    Jetpack Compose
                  </Link>
                </span>
                , while iOS used{" "}
                <span className="text-blue-500 hover:text-blue-400 underline">
                  <Link
                    href="https://www.swift.org/"
                    target="_blank"
                    prefetch={false}
                  >
                    Swift
                  </Link>
                </span>{" "}
                and{" "}
                <span className="text-blue-500 hover:text-blue-400 underline">
                  <Link
                    href="https://developer.apple.com/xcode/swiftui/"
                    target="_blank"
                    prefetch={false}
                  >
                    SwiftUI
                  </Link>
                </span>
                .
              </p>
              <p className="block mb-2">
                <span className="text-blue-500 hover:text-blue-400 underline">
                  <Link
                    href="https://firebase.google.com/"
                    target="_blank"
                    prefetch={false}
                  >
                    Firebase
                  </Link>
                </span>{" "}
                stores users, logs, and friendships.
              </p>
              <p className="block mb-2">
                <span className="text-blue-500 hover:text-blue-400 underline">
                  <Link
                    href="https://www.themoviedb.org/?language=en-US"
                    target="_blank"
                    prefetch={false}
                  >
                    The Movie Database (TMDB)
                  </Link>
                </span>{" "}
                provides data for thousands of movies.
              </p>
              <p className="block mb-4">
                The app operates seamlessly between iOS and Android devices.
              </p>
              <div className="flex w-full justify-center bg-[#111111] rounded py-2">
                <Image
                  src={SysDiagram}
                  alt="System Diagram"
                  width={500}
                  className="object-cover rounded"
                />
              </div>
              <div className="flex w-full justify-center text-xs pt-2">
                System Diagram
              </div>
            </div>
          </div>
        </div>
        <div className="animate-slidein [--slidein-delay:1200ms] opacity-0">
          <div className="text-2xl font-semibold text-gray-200 mb-4">
            Background
          </div>
          <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
            <p className="block">
              This project was created by a group of four students over the
              course of an academic year as a senior capstone project.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      {/* <div className="flex flex-col md:w-1/2 h-full m-4"> */}
      {/* <div className="animate-slidein [--slidein-delay:1100ms] opacity-0">
                <div className="text-2xl font-semibold text-gray-200 mb-4">
                  Overview
                </div>
                <div className="h-full bg-white/5 p-5 rounded-xl">
                  <p className=" block text-gray-300">
                    BackBlog is a collaborative movie playlisting app
                    independently developed for both iOS and Android devices.
                  </p>
                </div>
              </div> */}
      {/* </div> */}
    </>
  );
}
