import { LinkProps } from "@/lib/types";
import { getDomain } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IoQrCodeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";

const LinkCard = ({
  data,
  links,
  setLinks,
}: {
  data: LinkProps;
  links?: LinkProps[];
  setLinks?: (links: LinkProps[]) => void;
}) => {
  const GOOGLE_FAVICON_URL = "https://www.google.com/s2/favicons?domain=";

  const domain = getDomain(data.original_link);
  const favicon = GOOGLE_FAVICON_URL + domain + "&sz=256";

  console.log(GOOGLE_FAVICON_URL + domain);

  return (
    <li>
      <div className="flex max-w-md cursor-default items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black active:cursor-grabbing">
        <Image
          src={favicon}
          alt={domain}
          width={20}
          height={20}
          className="pointer-events-none h-10 w-10 rounded-full"
        />
        <div>
          <div className="mb-1 flex items-center space-x-2">
            <Link
              className="font-semibold text-blue-800"
              href={data.full_short_link}
              target="_blank"
              rel="noreferrer"
            >
              {data.short_link}
            </Link>
            <CopyButton url={data.full_short_link} />
            <DeleteButton data={data} links={links} setLinks={setLinks} />
          </div>
          <p className="w-72 truncate text-sm text-gray-500">
            {data.original_link}
          </p>
        </div>
        <button className="group rounded-full bg-gray-100 p-3 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95">
          <IoQrCodeOutline className="text-gray-700 transition-all group-hover:text-blue-800 w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default LinkCard;
