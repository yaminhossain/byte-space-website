import Link from "next/link";

function NotFound() {
  return (
    <main className="grid-background min-h-screen bg-electric-violet-800">
      <div className="container flex flex-col items-center text-center text-white">
        <div className="relative">
          <h1
            className="
              font-poppins
              text-[480px]
              font-semibold
              leading-[100%]
              bg-linear-to-b
              from-[#D4FB20]
              to-[#D4FB20]/60
              bg-clip-text text-transparent
            "
          >
            404
          </h1>

          <h2 className="heading-lg absolute -bottom-15 z-10 max-w-[935px]">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h2>
        </div>

        <p className="body-md mt-18 text-white">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="
            label-md
            mt-8
            rounded-full
            bg-crimson-500
            px-6
            py-3
            text-black-950
            transition-colors
            hover:bg-crimson-400
          "
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
