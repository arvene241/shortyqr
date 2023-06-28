"use client";

import { useState } from "react";
import { FiLink2 } from "react-icons/fi";
import LoadingDots from "./LoadingDots";
import { toast } from "sonner";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import LinkCard from "./LinkCard";
import { LinkProps } from "@/lib/types";
import PlaceholderCard from "./PlaceholderCard";

const Demo = () => {
  const [saving, setSaving] = useState(false);
  const [url, setUrl] = useState("");
  const [links, setLinks] = useLocalStorage<LinkProps[]>("links", []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    setSaving(false);

    if (res.ok) {
      const fetchedLink = await res.json();
      setLinks([...links, fetchedLink.result]);
      setUrl("");

      navigator.clipboard.writeText(fetchedLink.result.short_link).then(() => {
        toast.success("Copied shortlink to clipboard!");
        console.log("Copied shortlink to clipboard!");
      });
    } else {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-2.5 sm:px-0">
      <form onSubmit={handleSubmit}>
        {links.length >= 4 ? (
          <div></div>
        ) : (
          <div className="relative flex items-center">
            <FiLink2 className="absolute left-0 ml-3 w-5 text-gray-400" />
            <input
              type="url"
              placeholder="Shorten your link"
              value={url}
              onInput={(e) => {
                setUrl((e.target as HTMLInputElement).value);
              }}
              required
              className="peer block w-full rounded-md border border-gray-200 bg-white p-2 pl-10 pr-12 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={saving}
              className={`${
                saving
                  ? "cursor-not-allowed"
                  : "hover:border-gray-700 hover:text-gray-700 peer-focus:border-gray-700 peer-focus:text-gray-700"
              } absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 text-sm font-medium text-gray-400`}
            >
              {saving ? <LoadingDots color="#e5e7eb" /> : <p>↵</p>}
            </button>
          </div>
        )}
      </form>

      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <LinkCard
            key={links.indexOf(link)}
            data={link}
            links={links}
            setLinks={setLinks}
          />
        ))}
        {Array.from({ length: 4 - links.length }).map((_, index) => (
          <PlaceholderCard key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Demo;
