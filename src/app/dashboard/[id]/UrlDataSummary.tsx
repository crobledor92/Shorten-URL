import { IUrlDocument } from "@/libs/types";
import { calculateURLStats } from "@/libs/utils/calculateURLStats";
import React from "react";

const UrlDataSummary = ({ urlData }: { urlData: IUrlDocument }) => {
  const urlsStats = calculateURLStats(urlData);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center md:grid md:grid-cols-4 justify-items-center md:gap-8">
      <div className="flex flex-col items-center w-[92px] p-4 rounded-md border-2 border-orange-400 bg-slate-100">
        <h3>Visits</h3>
        <p className="font-bold text-3xl">{urlData.visits.length}</p>
      </div>
      <div className="flex flex-col items-center w-[92px] p-4 rounded-md bg-orange-200">
        <h3>per day</h3>
        <p className="font-bold text-3xl">{urlsStats.daylyAverage}</p>
      </div>
      <div className="flex flex-col items-center w-[92px] py-4 px-3 rounded-md bg-orange-200">
        <h3>per week</h3>
        <p className="font-bold text-3xl">{urlsStats.weeklyAverage}</p>
      </div>
      <div className="flex flex-col items-center w-[92px] py-4 px-2 rounded-md bg-orange-200">
        <h3>per month</h3>
        <p className="font-bold text-3xl">{urlsStats.monthlyAverage}</p>
      </div>
    </div>
  );
};

export default UrlDataSummary;
