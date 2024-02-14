"use client";

import { LinkProps } from "@/lib/types";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "sonner";

const DeleteButton = ({
  data,
  links,
  setLinks,
}: {
  data: LinkProps;
  links?: LinkProps[];
  setLinks?: (links: LinkProps[]) => void;
}) => {
  const [deleted, setIsDelete] = useState(false);

  useEffect(() => {
    console.log(deleted);
    const deleteLinkCard = () => {
      if (deleted) {
        try {
          fetch(`https://api-ssl.bitly.com/v4/bitlinks/${data.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_BITLY_TOKEN}`,
            },
          });
        } catch (error) {
          console.log(error);
          throw new Error("Failed to delete the link");
        }

        if (links && setLinks) {
          setLinks(links.filter((link) => link.id !== data.id));
        }
        toast.success("Link deleted!");
      }
      setIsDelete(false);
    };

    return () => deleteLinkCard();
  });

  return (
    <button
      onClick={() => setIsDelete(true)}
      className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-red-100 active:scale-95"
    >
      <AiOutlineDelete className="text-gray-700 transition-all group-hover:text-red-800" />
    </button>
  );
};

export default DeleteButton;
