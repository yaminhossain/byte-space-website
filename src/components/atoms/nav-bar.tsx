"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import NavBarLogo from "./svg-icons/navbar-logo";
import CartIcon from "./svg-icons/cart-icon";
import Avatar from "./avatar";

function NavBar() {
  const dummyUser = true;

  const routes: { path: string; label: ReactNode }[] = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/creators", label: "Creators" },
    { path: "/sign-in", label: "Sign In" },
    { path: "/sign-up", label: "Join Us" },
    {
      path: "/cart",
      label: <CartIcon />,
    },
    { path: "/dashboard", label: "Dashboard" },
  ];

  const pathName = usePathname();

  return (
    pathName !== "/sign-up" &&
    pathName !== "/sign-in" && (
      <nav className="fixed top-0 left-0 z-50 h-30 w-full bg-electric-violet-800 grid-background">
        <div className="container flex justify-between h-30 py-10">
          {/* Logo */}
          <div>
            <Link href="/">
              <NavBarLogo />
            </Link>
          </div>
          <>
            {/* Main navigation */}
            <div className="body-md flex gap-6 text-white">
              {routes.slice(0, 3).map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`hover:underline ${
                    pathName === route.path ? "underline" : ""
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>

            {/* Right navigation */}
            <div className="body-md flex gap-6 text-white">
              {dummyUser && (
                <Link
                  href={routes[6].path}
                  className={`hover:underline ${
                    pathName === routes[6].path ? "underline" : ""
                  }`}
                >
                  {routes[6].label}
                </Link>
              )}
              {!dummyUser &&
                routes.slice(3, 5).map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`hover:underline ${
                      pathName === route.path ? "underline" : ""
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              <Link href={routes[5].path}>{routes[5].label}</Link>

              {dummyUser && (
                <Link href={"/user-profile"}>
                  <Avatar
                    src="/images/avatars/avatar3.png"
                    alt="user profile"
                    size="xs"
                  />
                </Link>
              )}
            </div>
          </>
        </div>
      </nav>
    )
  );
}

export default NavBar;
