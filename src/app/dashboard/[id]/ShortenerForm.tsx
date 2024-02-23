"use client";

import SubmitButton from "../../components/SubmitButton";
import { useFormState } from "react-dom";
import { shortenUrl } from "../../../libs/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { copyOnClipboard } from "@/libs/utils/copyOnClipboard";
import Notification from "../../components/Notification";
import { toast } from "react-toastify";
import CopyIcon from "@/assets/CopyIcon";

const ShortenerForm = ({
  shortenedUrl,
  formAction,
}: {
  shortenedUrl: string | null;
  formAction: (payload: FormData) => void;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleCopyLink = (shortenedUrl: string) => {
    copyOnClipboard(shortenedUrl);
    toast.info("URL copied");
  };

  return (
    <section className="bg-white shadow-sm p-8 text-center rounded-lg mb-20">
      <h1 className="text-3xl md:text-5xl font-bold pb-8">
        Introduce the URL to be shortened
      </h1>
      <form action={formAction} className="pb-8">
        <div className="md:border rounded w-full sm:w-2/3 md:w-1/2 flex flex-col items-center gap-4 md:flex-row md:gap-0 overflow-hidden mx-auto">
          <input
            className="w-full p-2 border-slate-200 md:border-transparent rounded md:rounded-none"
            name="urlInput"
            type="text"
            placeholder="Enter the link here"
          ></input>
          <SubmitButton text="Shorten URL" sendingText="Sending" />
        </div>
      </form>
      {shortenedUrl && (
        <div className="flex gap-8 justify-center items-center  border-2 border-red-300 rounded-md w-fit mx-auto py-4 px-2 md:px-8">
          <p className="sm:text-xl md:text-2xl font-semibold">
            {baseUrl + shortenedUrl}
          </p>
          <button
            className="p-2 hover:bg-red-300 group rounded-full active:translate-y-0.5"
            onClick={() => handleCopyLink(baseUrl + shortenedUrl)}
          >
            <CopyIcon className="stroke-red-300 group-hover:stroke-white" />
          </button>
        </div>
      )}
      <Notification />
    </section>
  );
};

export default ShortenerForm;
