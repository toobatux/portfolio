"use client";
import Goyangi from "@/../public/goyangi.jpg";
import WatchTower from "@/../public/watchtower.jpg";

const sections = ["Overview", "Motivation"];

const projects = [
  {
    img: Goyangi,
    title: "Goyangi",
    tagLine: "A social network for cat photos",
    link: "/projects/goyangi",
  },
  {
    img: WatchTower,
    title: "WatchTower",
    tagLine: "A security camera livestream",
    link: "/projects/watchtower",
  },
];

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center">
        <div className="flex w-full max-w-4xl">{children}</div>
      </div>
    </>
  );
}
