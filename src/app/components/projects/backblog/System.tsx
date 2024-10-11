import Image from "next/image";
import Link from "next/link";
import SysDiagram from "/public/backblog.drawio.png";

const System = () => {
  return (
    <div className="">
      <div className="h-full rounded-xl bg-white/5 p-5 text-neutral-300">
        <div className="text-2xl font-semibold text-neutral-200 mb-2">
          System
        </div>
        <p className="block mt-4">
          Both apps were developed independently on their native platforms.
        </p>
        <ul className="list-disc ps-5 mt-1 mb-4">
          <li>
            The Android version was developed using{" "}
            <span className="text-blue-500 hover:underline">
              <Link
                href="https://kotlinlang.org/"
                target="_blank"
                prefetch={false}
              >
                Kotlin
              </Link>
            </span>{" "}
            and{" "}
            <span className="text-blue-500 hover:underline">
              <Link
                href="https://developer.android.com/compose"
                target="_blank"
                prefetch={false}
              >
                Jetpack Compose
              </Link>
            </span>
            .
          </li>
          <li>
            The iOS version was developed using{" "}
            <span className="text-blue-500 hover:underline">
              <Link
                href="https://www.swift.org/"
                target="_blank"
                prefetch={false}
              >
                Swift
              </Link>
            </span>{" "}
            and{" "}
            <span className="text-blue-500 hover:underline">
              <Link
                href="https://developer.apple.com/xcode/swiftui/"
                target="_blank"
                prefetch={false}
              >
                SwiftUI
              </Link>
            </span>
            .
          </li>
          <li>
            <span className="text-blue-500 hover:underline">
              <Link
                href="https://firebase.google.com/"
                target="_blank"
                prefetch={false}
              >
                Firebase
              </Link>
            </span>{" "}
            stores users, logs, and friendships (users who are not logged in may
            store logs locally and sync them upon login).
          </li>
          <li>
            <span className="text-blue-500 hover:underline">
              <Link
                href="https://www.themoviedb.org/?language=en-US"
                target="_blank"
                prefetch={false}
              >
                The Movie Database (TMDB)
              </Link>
            </span>{" "}
            provides data for thousands of movies.
          </li>
        </ul>
        <div className="block">
          <div className="flex w-full justify-center bg-[#111111] rounded py-2">
            <Image
              src={SysDiagram}
              alt="System Diagram"
              width={500}
              placeholder="blur"
              loading="eager"
              className="object-cover rounded"
            />
          </div>
          <div className="flex w-full justify-center pt-2 text-neutral-400">
            <em>System Diagram</em>
          </div>
        </div>
        <p className="block mt-4">
          The app operates seamlessly between iOS and Android devices. For
          example, if two users are viewing the same log on separate devices,
          any updates to the log will appear instantly on both devices.
        </p>
      </div>
    </div>
  );
};

export default System;
