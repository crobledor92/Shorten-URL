"use client";

import { IUrlDocument } from "@/libs/types";
import React from "react";
import Link from "next/link";
import PlusIcon from "@/assets/PlusIcon";
import CopyIcon from "@/assets/CopyIcon";
import Notification from "@/app/components/Notification";
import { copyOnClipboard } from "@/libs/utils/copyOnClipboard";
import { toast } from "react-toastify";
import UrlDataSummary from "./UrlDataSummary";

const UserUrls = ({
  urls,
  baseUrl,
}: {
  urls: IUrlDocument[]
  baseUrl: string | undefined
}) => {
  const handleCopyLink = (shortenedUrl: string) => {
    copyOnClipboard(shortenedUrl);
    toast.info("URL copied");
  };

  return (
    <>
      <ul className="mb-6">
        {urls.length > 0 &&
          urls.map((url) => {
            return (
              <li
                key={url._id}
                className="mb-8 p-4 rounded bg-white shadow-sm w-full min-w-96"
              >
                <section className="flex flex-col gap-8 lg:grid lg:grid-cols-5 justify-between items-center">
                  <div className="col-span-2">
                    <h2 className="text-2xl font-semibold">{url.url}</h2>
                    <div className="flex gap-4 items-center">
                      <p className="font-semibold text-slate-400">
                        {baseUrl + url.shortenedUrl}
                      </p>
                      <button
                        className="p-2 hover:bg-blue-300 rounded-full active:translate-y-0.5"
                        onClick={() =>
                          handleCopyLink(baseUrl + url.shortenedUrl)
                        }
                      >
                        <CopyIcon className="stroke-blue-700" />
                      </button>
                      <Notification />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <UrlDataSummary urlData={url} />
                  </div>
                  <Link
                    href={{
                      pathname: `/details`,
                      query: { urlData: JSON.stringify(url) },
                    }}
                    className="w-2/3 lg:w-fit justify-self-end flex justify-center lg:mr-8 p-2 rounded-lg border-2 border-red-600 group hover:bg-red-600 active:translate-y-0.5"
                  >
                    <PlusIcon className="stroke-red-600 group-hover:stroke-white" />
                  </Link>
                </section>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default UserUrls;
