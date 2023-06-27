"use client";

import Image from "next/image";
import { IoQrCodeOutline } from "react-icons/io5";
import { LinkProps } from "@/lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import LoadingDots from "./LoadingDots";
import QrDropdown from "./QrDropdown";

const Qrcode = ({ data }: { data: LinkProps }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [qr, setQr] = useState<string>("");
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const generateQr = async () => {
    setIsOpen(true);
    setSaving(true);

    const res = await fetch(
      `http://api.qrserver.com/v1/create-qr-code/?data=${data.short_link}`
    );
    setSaving(false);

    if (res.ok) {
      const fetchedQr = res.url;
      setQr(fetchedQr);
      console.log(fetchedQr);
    } else {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  };

  const downloadQr = (url: string, extension: string) => {
    if (!anchorRef.current) return;
    anchorRef.current.href = url;
    anchorRef.current.download = `${data.code}.${extension}`;
    anchorRef.current.click();
  }

  return (
    <>
      <button
        onClick={generateQr}
        className="group rounded-full bg-gray-100 p-3 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95"
      >
        <IoQrCodeOutline className="text-gray-700 transition-all group-hover:text-blue-800 w-5 h-5" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-100 bg-opacity-10 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all flex flex-col">
                  <div className="py-6">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      Download QR Code
                    </Dialog.Title>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-6 bg-gray-50 p-6 sm:rounded-b-2xl">
                    <div className="mx-auto rounded-lg border-2 border-gray-200 p-4 bg-white">
                      {saving ? (
                        <LoadingDots color="#e5e7eb" />
                      ) : (
                        <Image
                          src={qr}
                          alt="QR Code"
                          width={150}
                          height={150}
                        />
                      )}
                    </div>

                    <QrDropdown qr={qr} downloadQr={() => downloadQr} />
                    {/* This will be used to prompt downloads. */}
                    <a
                      className="hidden"
                      download={`shortyqr_${data.code}.svg`}
                      ref={anchorRef}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Qrcode;
