"use client";

import useScroll from "@/lib/hooks/useScroll";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { NavLinks } from "@/lib/constants";
import NavMobile from "./NavMobile";

const Nav = () => {
  const scrolled = useScroll(80);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled && "border-b border-gray-200 bg-white/75 backdrop-blur-lg"
      }`}
    >
      <Wrapper className="flex items-center justify-between py-4 relative">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-extrabold text-black">
            Shortyqr
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-6">
          {NavLinks.map((link) =>
            link.button ? (
              <Link
                href={link.href}
                key={link.key}
                className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
              >
                {link.text}
              </Link>
            ) : (
              <Link
                href={link.href}
                key={link.key}
                className="text-sm font-medium capitalize text-gray-500 transition-colors ease-out hover:text-black"
              >
                {link.text}
              </Link>
            )
          )}
        </div>
        <NavMobile />
      </Wrapper>
    </div>
  );
};

export default Nav;
