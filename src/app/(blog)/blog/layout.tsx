"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React from "react";

export default function BlogLayout({
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
