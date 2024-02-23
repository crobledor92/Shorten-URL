import BarChartIcon from "@/assets/BarChartIcon";
import LineChartIcon from "@/assets/LineChartIcon";
import { IUrl } from "@/libs/types";
import { BarChart, Card, Title, Text, LineChart } from "@tremor/react";
import { useState } from "react";

export const MonthlyVisitsChart = ({
  title,
  visits,
}: {
  title: string;
  visits: IUrl["visits"];
}) => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  const generateMonthlyVisitCounts = (visits: IUrl["visits"]) => {
    const monthlyVisits = Array.from({ length: 12 }, (_, index) => ({
      name: new Date(2024, index, 1).toLocaleString("en-US", { month: "long" }),
      visits: 0,
    }));

    visits.forEach((visit) => {
      const monthIndex = new Date(visit.date).getMonth();
      monthlyVisits[monthIndex].visits += 1;
    });

    return monthlyVisits;
  };

  const monthlyVisitsCount = generateMonthlyVisitCounts(visits);

  const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString();

  return (
    <Card>
      <div className="flex justify-between mb-8">
        <Title className="pl-7">{title}</Title>
        <div className="flex gap-4 items-baseline align-bottom">
          <button
            className={`border-2 border-transparent hover:border-blue-700 rounded-md p-1 ${
              chartType === "bar" ? "bg-blue-700" : ""
            }`}
            onClick={() => setChartType("bar")}
            disabled={chartType === "bar"}
          >
            <BarChartIcon />
          </button>
          <button
            className={`border-2 border-transparent hover:border-blue-700 rounded-md p-1 ${
              chartType === "line" ? "bg-blue-700" : ""
            }`}
            onClick={() => setChartType("line")}
            disabled={chartType === "line"}
          >
            <LineChartIcon />
          </button>
        </div>
      </div>
      {chartType === "bar" ? (
        <BarChart
          className="mt-2"
          data={monthlyVisitsCount}
          index="name"
          categories={["visits"]}
          colors={["orange"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
          showAnimation={true}
          rotateLabelX={{ angle: -50, verticalShift: 20, xAxisHeight: 50 }}
          showLegend={false}
        />
      ) : (
        <LineChart
          className="mt-4 h-72"
          data={monthlyVisitsCount}
          index="name"
          categories={["visits"]}
          colors={["orange"]}
          connectNulls={true}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
          showAnimation={true}
          rotateLabelX={{ angle: -50, verticalShift: 20, xAxisHeight: 50 }}
          showLegend={false}
        />
      )}
    </Card>
  );
};
