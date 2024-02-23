"use client";

import { MonthlyVisitsChart } from "@/app/details/MonthlyVisitsChart";
import { IUrlDocument } from "@/libs/types";
import { basicFetch } from "@/libs/utils/fetchFunction";
import getConfig from "next/config";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "../components/Navbar";
import CopyIcon from "@/assets/CopyIcon";
import { copyOnClipboard } from "@/libs/utils/copyOnClipboard";
import { toast } from "react-toastify";
import Notification from "../components/Notification";
import WeeklyVisitsChart from "./WeeklyVisitsChart";
import Footer from "../components/Footer";

const UserInfo = ({
  searchParams,
}: {
  searchParams: {
    urlData: string;
  };
}) => {
  const [urls, setUrls] = useState<IUrlDocument[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const urlData: IUrlDocument = JSON.parse(searchParams.urlData);

  const handleCopyLink = (shortenedUrl: string) => {
    copyOnClipboard(shortenedUrl);
    toast.info("URL copied");
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4 mt-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl mb-6">{urlData.url}</h1>
        <div className="flex gap-4 justify-center items-center mb-20">
          <p className="font-semibold text-slate-400">
            {baseUrl + urlData.shortenedUrl}
          </p>
          <button
            className="p-2 hover:bg-blue-300 rounded-full active:translate-y-0.5"
            onClick={() => handleCopyLink(baseUrl + urlData.shortenedUrl)}
          >
            <CopyIcon className="stroke-blue-700" />
          </button>
        </div>
        <div className="flex flex-col gap-10 mb-10">
          <MonthlyVisitsChart title="Visits by month" visits={urlData.visits} />
          <WeeklyVisitsChart title="Visits by week" visits={urlData.visits} />
        </div>
      </div>
      <Notification />
    </main>
  );
};

export default UserInfo;
