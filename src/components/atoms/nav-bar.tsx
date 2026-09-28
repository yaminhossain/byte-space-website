"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import NavBarLogo from "./navbar-logo";
import CartIcon from "./cart-icon";

function NavBar() {
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
  ];

  const pathName = usePathname();
  console.log("Pathname: ", pathName);
  return (
    <nav className="container py-11.75 bg-electric-violet-800 flex justify-between">
      <div>
        <Link href={"/"}>
          <NavBarLogo />
        </Link>
      </div>

      <div className="text-white body-md flex gap-6">
        {routes.slice(0, 3).map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`hover:underline ${pathName === route.path && "underline"}`}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="text-white body-md flex gap-6">
        {routes.slice(3, 6).map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`hover:underline ${pathName === route.path && "underline"}`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
