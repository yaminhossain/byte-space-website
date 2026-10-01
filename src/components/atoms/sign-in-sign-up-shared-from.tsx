"use client";

import Link from "next/link";
import Button from "./button";
import Input from "./input";
import { usePathname } from "next/navigation";
import FacebookIcon from "./svg-icons/facebook-icon";
import GoogleIcon from "./svg-icons/google-icon";

function SignInSignUpSharedFrom() {
  const pathName = usePathname();

  return (
    <div className="w-[579px] pt-[61] px-[63px] pb-[40px] bg-white rounded-3xl">
      <h1 className="body-lg text-electric-violet-800">
        {pathName === "/sign-up" ? "Create an Account" : "Sign In"}
      </h1>
      <p className="heading-md text-black-950 w-[453px]">
        {pathName === "/sign-up" ? "Welcome to ByteSpace" : "Welcome Back"}
      </p>

      {/* input fields */}
      <div className="flex flex-col gap-6 mt-10">
        {/* name */}
        {pathName === "/sign-up" && (
          <div>
            <p className="label-sm text-black-950 mb-2">Full Name</p>
            <Input variant="rounded" placeholder="Jamie Davis" />
          </div>
        )}

        {/* email */}
        <div>
          <p className="label-sm text-black-950 mb-2">Email</p>
          <Input
            variant="rounded"
            placeholder="designer@example.com"
            type="email"
          />
        </div>

        {/* Password */}
        <div>
          <p className="label-sm text-black-950 mb-2">Password</p>
          <Input variant="rounded" placeholder="*******" type="password" />
        </div>

        {pathName === "/sign-up" ? (
          <Button className="w-[123px] ms-auto">Continue</Button>
        ) : (
          <Button className="w-[123px] ms-auto">Sign In</Button>
        )}
      </div>

      {pathName === "/sign-in" && (
        <div className="mt-[73px]">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-500">or</span>
            <span className="h-px flex-1 bg-gray-300" />
          </div>
          <div className="flex gap-4 mt-[67px] justify-center items-center">
            <div className="size-[72px] flex justify-center items-center border border-gray-200 rounded-2xl cursor-pointer">
              <FacebookIcon />
            </div>
            <div className="size-[72px] flex justify-center items-center border border-gray-200 rounded-2xl cursor-pointer">
              <GoogleIcon />
            </div>
          </div>
        </div>
      )}

      <div
        className={`${pathName === "/sign-up" ? "mt-[122px]" : "mt-[73px]"} `}
      >
        {pathName === "/sign-in" ? (
          <div className="flex gap-1 justify-center items-center ">
            <p className="body-md text-black-400">New User?</p>
            <Link href={"/sign-up"} className="text-electric-violet-800">
              Create an account
            </Link>
          </div>
        ) : (
          <div className="flex gap-1 justify-center items-center ">
            <p className="body-md text-black-400">Already have an account?</p>
            <Link href={"/sign-in"} className="text-electric-violet-800">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignInSignUpSharedFrom;
