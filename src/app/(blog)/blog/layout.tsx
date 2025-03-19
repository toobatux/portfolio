"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React from "react";
import Test from "@/app/components/Test";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Test />
      {children}
      <Footer />
    </>
  );
}
