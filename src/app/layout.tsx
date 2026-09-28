import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "@/components/atoms/nav-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace",
    template: "%s | ByteSpace ",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-satoshi">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
