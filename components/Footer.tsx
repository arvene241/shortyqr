import Link from "next/link";
import Wrapper from "./Wrapper";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";
import portfolio from "@/public/icon.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
      <Wrapper className="py-10">
        <div className="flex items-center justify-between">
          <p className="">© 2023 Shortyqr</p>
          <div className="flex items-center space-x-2">
            <Link
              href="https://github.com/arvene241/shotyqr"
              target="_blank"
              className="rounded-md p-2 transition-colors hover:bg-gray-300 active:bg-gray-300"
            >
              <AiOutlineGithub className="h-6 w-6 text-gray-900" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mikearvenelantin/"
              target="_blank"
              className="rounded-md p-2 transition-colors hover:bg-gray-300 active:bg-gray-300"
            >
              <ImLinkedin className="h-6 w-6 text-gray-900" />
            </Link>
            <Link
              href="https://arvene.vercel.app/"
              target="_blank"
              className="rounded-md p-2 transition-colors hover:bg-gray-300 active:bg-gray-300"
            >
              <Image src={portfolio} alt="portfolio" width={10} height={10} className="h-6 w-6 text-gray-900" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
