import SignInSignUpSharedDecoration from "@/components/atoms/sign-in-sign-up-shared-decoration";
import SignInSignUpSharedFrom from "@/components/atoms/sign-in-sign-up-shared-from";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp",
};

function SignUpPage() {
  return (
    <section className="bg-electric-violet-800 grid-background pb-[120px] ">
      <div className="container flex justify-between">
        {/* Decoration Section */}
        <SignInSignUpSharedDecoration />

        {/* Form Section */}
        <SignInSignUpSharedFrom />
      </div>
    </section>
  );
}

export default SignUpPage;
