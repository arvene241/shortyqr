"use client";

import { IoImageOutline } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const IconMenu = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center justify-start space-x-2">
      {icon}
      <p className="text-sm">{text}</p>
    </div>
  );
};

const QrDropdown = ({
  qr,
  downloadQr,
}: {
  qr: string;
  downloadQr: (url: string, extension: string) => void;
}) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex w-[182px] items-center justify-center gap-2 rounded-md border border-black bg-black px-5 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black">
            <HiOutlineDownload />
            Export
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 top-0 z-50">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex flex-col gap-2 bg-white p-7 lg:grid-cols-2">
                  <button
                    className="w-full rounded-md p-2 text-left text-sm font-medium text-gray-500 transition-all duration-75 hover:bg-gray-100"
                    onClick={() => downloadQr(qr, "svg")}
                  >
                    <IconMenu
                      icon={<IoImageOutline className="h-4 w-4" />}
                      text="SVG"
                    />
                  </button>
                  <button
                    className="w-full rounded-md p-2 text-left text-sm font-medium text-gray-500 transition-all duration-75 hover:bg-gray-100"
                    onClick={() => downloadQr(qr, "svg")}
                  >
                    <IconMenu
                      icon={<IoImageOutline className="h-4 w-4" />}
                      text="SVG"
                    />
                  </button>
                  <button
                    className="w-full rounded-md p-2 text-left text-sm font-medium text-gray-500 transition-all duration-75 hover:bg-gray-100"
                    onClick={() => downloadQr(qr, "svg")}
                  >
                    <IconMenu
                      icon={<IoImageOutline className="h-4 w-4" />}
                      text="SVG"
                    />
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default QrDropdown;
