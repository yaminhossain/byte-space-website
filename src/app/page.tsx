


import { Metadata } from "next";
import { ChangeEvent } from "react";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home | ByteSpace",
};

export default function Home() {
  

  return (
    <div className="h-226 bg-electric-violet-800 grid-background">
      <h1 className="text-7xl text-center font-satoshi font-medium">
        HOME PAGE
      </h1>
      <HomeClient />
      <div className="border h-[52px]"></div>
    </div>
  );
}
