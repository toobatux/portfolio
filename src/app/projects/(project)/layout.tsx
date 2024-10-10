"use client";
import Image from "next/image";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";
import Navbar from "../../components/projects/Navbar";
import Link from "next/link";
import ScrollTop from "../../components/home/ScrollTop";
import Footer from "@/app/components/home/Footer";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div
        className={`absolute inset-0 bg-slate-800 bg-[size:20px_20px] opacity-20 transition-colors duration-500`}
      ></div>
      <div className="relative min-h-screen flex flex-col lg:pt-8">
        <main className="flex flex-grow justify-center">
          <div className="flex w-full max-w-[80rem] justify-center">
            <div className="flex flex-grow justify-center">
              <aside className="hidden p-4 md:flex md:justify-center md:flex-none w-48">
                <div className="fixed w-40">
                  <div className="w-full">
                    <div className="text-gray-100 text-lg font-semibold mb-4 w-full">
                      On This Page
                    </div>
                    <div className="flex my-2 items-center bg-white/5 hover:bg-white/10 rounded-lg p-4 text-gray-100">
                      Overview
                    </div>
                    <div className="flex my-2 items-center bg-white/5 hover:bg-white/10 rounded-lg p-4 text-gray-100">
                      System
                    </div>
                    <div className="flex my-2 items-center bg-white/5 hover:bg-white/10 rounded-lg p-4 text-gray-100">
                      Background
                    </div>
                  </div>
                </div>
              </aside>
              <div className="flex flex-col max-w-[50rem] w-full m-4">
                {children}
              </div>
              <aside className="hidden p-4 lg:flex lg:justify-center lg:flex-none w-48">
                <div className="fixed w-40">
                  <div className="w-full">
                    <div className="text-gray-100 text-lg font-semibold mb-4">
                      Other Projects
                    </div>
                    <Link href="" prefetch={false}>
                      <div className="flex items-center bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-4 mb-4">
                        <div className="flex flex-col w-full">
                          <div className="flex items-center w-full">
                            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                              <Image
                                src={Goyangi}
                                alt="goyangi"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <p className="block text-gray-200 text-lg font-bold my-2">
                            Goyangi
                          </p>
                          <p className="block text-gray-400 text-sm">
                            A social network for cat photos
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link href="" prefetch={false}>
                      <div className="flex items-center bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-4 mb-4">
                        <div className="flex flex-col w-full">
                          <div className="flex items-center w-full">
                            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                              <Image
                                src={WatchTower}
                                alt="watchtower"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <p className="block text-gray-200 text-lg font-bold my-2">
                            WatchTower
                          </p>
                          <p className="block text-gray-400 text-sm">
                            A security camera live stream
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/projects/"
                      className="flex items-end hover:underline text-gray-400 justify-center"
                    >
                      <div className="text-gray-400 font-semibold">
                        See more
                      </div>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
