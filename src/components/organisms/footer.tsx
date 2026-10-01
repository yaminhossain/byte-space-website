"use client";

import Link from "next/link";
import Button from "../atoms/button";
import Input from "../atoms/input";
import FooterLogo from "../atoms/svg-icons/footer-logo";
import { usePathname } from "next/navigation";

function Footer() {
  const pathName = usePathname();

  return (
    pathName !== "/sign-in" &&
    pathName !== "/sign-up" && (
      <footer className="container mt-[71px] ">
        <div className="flex justify-between items-end">
          <div>
            <FooterLogo />
            <p className="body-sm text-black-950 mt-4 mb-11.25">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="flex gap-6 mb-6 w-[504px]">
              <Input variant="pill" placeholder="Enter your email" />
              <Button className="w-[104px]">Search</Button>
            </div>
            <p className="body-xs text-black-950">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="flex gap-10 body-sm text-black-950">
            <div className="w-[167px] flex flex-col gap-4">
              <Link href={"#"}>Featured Courses</Link>
              <Link href={"#"}>Featured Categories</Link>
              <Link href={"#"}>Business</Link>
              <Link href={"#"}>IT</Link>
              <Link href={"#"}>Design</Link>
            </div>
            <div className="w-[167px] flex flex-col gap-4">
              <Link href={"#"}>Development</Link>
              <Link href={"#"}>Marketing</Link>
              <Link href={"#"}>Photography</Link>
              <Link href={"#"}>Finance</Link>
              <Link href={"#"}>Sport</Link>
            </div>
            <div className="w-[167px] flex flex-col gap-4">
              <Link href={"#"}>Become a Creator</Link>
              <Link href={"#"}>Affiliate Program</Link>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Help</Link>
              <Link href={"#"}>About</Link>
            </div>
          </div>
        </div>
        <hr className="text-black-200 w-full mt-[130px]" />

        <div className="flex justify-between mt-[23px] body-xs text-black-950 ">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
        <div className="mt-[48px]" />
      </footer>
    )
  );
}

export default Footer;
