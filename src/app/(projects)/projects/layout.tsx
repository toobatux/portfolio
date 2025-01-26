"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
