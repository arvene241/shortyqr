"use client";

import { useState } from "react";
import { NavLinks } from "@/lib/constants/navlinks";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";

const NavMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`fixed inset-0 z-50 w-full sm:hidden ${toggle ? "" : 'pointer-events-none'}`}>
      <div
        className="absolute right-5 top-5 z-20 cursor-pointer w-7 h-7 pointer-events-auto"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <BiX className="w-full h-full" />
        ) : (
          <BiMenu className="w-full h-full" />
        )}
      </div>
      <ul
        className={`menu ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {NavLinks.map((link) => (
          <div
            key={link.key}
            className={`navlinks ${
              toggle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`}
          >
            <Link
              href={link.href}
              className="font-medium capitalize text-gray-500 hover:text-black"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
