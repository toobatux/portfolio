import Image from "next/image";
import Link from "next/link";
import SysDiagram from "/public/backblog.drawio.png";

const System = () => {
  return (
    <div className="mb-6 lg:mb-8">
      <div className="h-full rounded-xl bg-white/5 p-5 text-gray-300">
        <div className="text-2xl font-semibold text-gray-200 mb-4">System</div>
        <p className="block mb-2">
          The Android version was developed using{" "}
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
          .
        </p>
        <p className="block mb-2">
          The iOS version was developed using{" "}
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
  );
};

export default System;
