"use client";
import TitleCard from "@/app/components/projects/TitleCard";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import BackBlogPic from "/public/backblog.png";
import Overview from "@/app/components/projects/backblog/Overview";
import System from "@/app/components/projects/backblog/System";
import Background from "@/app/components/projects/backblog/Background";
import Header from "@/app/components/projects/backblog/Header";
import ScrollTop from "@/app/components/home/ScrollTop";
import Responsibilities from "@/app/components/projects/backblog/Responsibilities";
import UIOverview from "@/app/components/projects/backblog/UIOverview";
import UICont from "@/app/components/projects/backblog/UICont";

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
      <div className="animate-slidein [--slidein-delay:500ms] opacity-0 mb-6">
        <Header tools={tools} />
      </div>
      <div className="animate-slidein [--slidein-delay:800ms] opacity-0 mb-6">
        <Overview />
      </div>
      <div className="animate-slidein [--slidein-delay:1000ms] opacity-0 mb-6">
        <System />
      </div>

      <div className="animate-slidein [--slidein-delay:1200ms] opacity-0 mb-6">
        <UIOverview />
      </div>

      <div className="animate-slidein [--slidein-delay:1400ms] opacity-0 mb-6">
        <Background />
      </div>

      <div className="animate-slidein [--slidein-delay:1600ms] opacity-0 mb-6">
        <Responsibilities />
      </div>

      <div className="animate-slidein [--slidein-delay:1600ms] opacity-0">
        <UICont />
      </div>

      <div className="flex items-center justify-center my-12">
        <ScrollTop />
      </div>
    </>
  );
}
