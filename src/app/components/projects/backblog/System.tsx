import Image from "next/image";
import Link from "next/link";
import SysDiagram from "/public/backblogSys.png";
import { memo } from "react";

const System = () => {
  return (
    <div className="h-full">
      <div className="text-2xl font-semibold text-white/90 mb-6">System</div>
      <div className="space-y-4">
        <p className="block">
          Both apps were developed independently on their native platforms. The
          Android version was developed using{" "}
          <span className="text-white hover:underline">
            <Link
              href="https://kotlinlang.org/"
              target="_blank"
              prefetch={false}
            >
              Kotlin
            </Link>
          </span>{" "}
          and{" "}
          <span className="text-white hover:underline">
            <Link
              href="https://developer.android.com/compose"
              target="_blank"
              prefetch={false}
            >
              Jetpack Compose
            </Link>
          </span>
          , while the iOS version was built using{" "}
          <span className="text-white hover:underline">
            <Link
              href="https://www.swift.org/"
              target="_blank"
              prefetch={false}
            >
              Swift
            </Link>
          </span>{" "}
          and{" "}
          <span className="text-white hover:underline">
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
        <p>
          <span className="text-white hover:underline">
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
        </p>
        <p>
          <span className="text-white hover:underline">
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
        <div className="block">
          <div className="my-10">
            <div className="flex w-full justify-center bg-black rounded-xl py-2 border border-white/10">
              <Image
                src={SysDiagram}
                alt="System Diagram"
                width={500}
                placeholder="blur"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex w-full justify-center mt-2 text-white/40">
              <p>System Diagram</p>
            </div>
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

export default memo(System);
