"use client";

import Layout from "../../components/Navbar";
import ShortenerForm from "./ShortenerForm";
import { useEffect, useState } from "react";
import { basicFetch } from "@/libs/utils/fetchFunction";
import { IUrlDocument } from "@/libs/types";
import UserURLs from "@/app/dashboard/[id]/UserUrls";
import Footer from "@/app/components/Footer";
import { calculateURLStats } from "@/libs/utils/calculateURLStats";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";
import { shortenUrl } from "@/libs/actions";

const Dashboard = ({ params: { id } }: { params: { id: string } }) => {
  const [urls, setUrls] = useState<IUrlDocument[]>([]);
  const { data: session } = useSession();
  const [shortenedUrl, formAction] = useFormState<string | null, FormData>(
    (_: any, formData: FormData) =>
    shortenUrl(_, formData, session?.user.email),
    null
  );
    
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    basicFetch(`/api/url/?id=${id}`)
      .then((data: any) => {
        const orderedUrls: IUrlDocument[] = data.urls.reverse();
        setUrls(orderedUrls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, shortenedUrl]);

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <ShortenerForm shortenedUrl={shortenedUrl} formAction={formAction}/>
      <UserURLs urls={urls} baseUrl={baseUrl} />
    </main>
  );
};

export default Dashboard;
