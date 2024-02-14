import { LinkProps } from "@/lib/types";
import { getDomain } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";
import Qrcode from "./Qrcode";
import useBreakpoints from "@/lib/hooks/useBreakpoint";

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

  console.log(data)

  const { isMobile } = useBreakpoints();

  const domain = getDomain(data.long_url);
  const favicon = GOOGLE_FAVICON_URL + domain + "&sz=256";

  console.log(GOOGLE_FAVICON_URL + domain);

  return (
    <li>
      <div className="flex max-w-md cursor-default items-center min-[450px]:justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black active:cursor-grabbing max-[450px]:gap-2 gap-0">
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
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              {data.id}
            </Link>
            <CopyButton url={data.link} />
            <DeleteButton data={data} links={links} setLinks={setLinks} />
            {isMobile ? <Qrcode data={data} /> : <></>}
          </div>
          <p className="w-72 truncate text-sm text-gray-500">
            {data.long_url}
          </p>
        </div>
        {isMobile ? <></> : <Qrcode data={data} />}
      </div>
    </li>
  );
};

export default LinkCard;
