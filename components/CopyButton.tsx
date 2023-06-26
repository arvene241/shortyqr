"use client";

import { useState } from "react";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { toast } from "sonner";

const CopyButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url).then(() => {
      toast.success("Copied shortlink to clipboard!");
    });
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95"
    >
      {copied ? (
        <IoCheckmarkOutline className="text-gray-700 transition-all group-hover:text-blue-800" />
      ) : (
        <IoCopyOutline className="text-gray-700 transition-all group-hover:text-blue-800" />
      )}
    </button>
  );
};

export default CopyButton;
