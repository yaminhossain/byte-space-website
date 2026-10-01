import SignInSignUpSharedDecoration from "@/components/atoms/sign-in-sign-up-shared-decoration";
import SignInSignUpSharedFrom from "@/components/atoms/sign-in-sign-up-shared-from";
import ByteSpaceLogo from "@/components/atoms/svg-icons/bytespace-logo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SignIn",
};

function SignInPage() {
  return (
    <div className="-mt-[120px]">
      <nav className="h-30 w-full bg-electric-violet-800 grid-background">
        <div className="container flex justify-between h-30 py-10">
          <div>
            <Link href="/">
              <ByteSpaceLogo />
            </Link>
          </div>
        </div>
      </nav>
      <section className="bg-electric-violet-800 grid-background pb-[120px] ">
        <div className="container flex justify-between">
          {/* Decoration Section */}
          <SignInSignUpSharedDecoration />

          {/* Form Section */}
          <SignInSignUpSharedFrom />
        </div>
      </section>
    </div>
  );
}

export default SignInPage;
