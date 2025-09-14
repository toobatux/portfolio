"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Test from "@/app/components/Test";
import React from "react";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Test /> */}
      <div className="pt-20">{children}</div>
      {/* <Footer /> */}
    </>
  );
}
