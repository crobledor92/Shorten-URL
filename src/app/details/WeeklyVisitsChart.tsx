import BarChartIcon from "@/assets/BarChartIcon";
import LineChartIcon from "@/assets/LineChartIcon";
import { IUrl } from "@/libs/types";
import { BarChart, Card, Title, LineChart } from "@tremor/react";
import { useState } from "react";

const WeeklyVisitsChart = ({
  title,
  visits,
}: {
  title: string;
  visits: IUrl["visits"];
}) => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  const generateWeeklyVisitCounts = (visits: IUrl["visits"]) => {
    function getWeek(date: Date) {
      const startOfYear = new Date(date.getFullYear(), 0, 1);
      const diff = date.getTime() - startOfYear.getTime();
      const oneWeek = 604800000; // milliseconds in a week
      const weekNumber = Math.ceil(diff / oneWeek);
      return weekNumber;
    }

    interface GroupedByWeek {
      [week: number]: {
        name: string;
        visits: number;
      };
    }

    const groupedByWeek = visits.reduce(
      (result: GroupedByWeek, item) => {
        const date = new Date(item.date);
        const week = getWeek(date);
        const year = date.getFullYear();
        const weekName = `Week ${week}, ${year}`;

        if (!result[week]) {
          result[week] = { name: weekName, visits: 0 };
        }

        result[week].visits += 1;

        return result;
      },
      {}
    );

    const resultArray = Object.values(groupedByWeek);

    return resultArray;
  };

  const weeklyVisitsCount = generateWeeklyVisitCounts(visits);

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
          data={weeklyVisitsCount}
          index="name"
          categories={["visits"]}
          colors={["orange"]}
          yAxisWidth={48}
          showAnimation={true}
          rotateLabelX={{ angle: -50, verticalShift: 30, xAxisHeight: 70 }}
          showLegend={false}
        />
      ) : (
        <LineChart
          className="mt-4 h-72"
          data={weeklyVisitsCount}
          index="name"
          categories={["visits"]}
          colors={["orange"]}
          yAxisWidth={48}
          connectNulls={true}
          showAnimation={true}
          rotateLabelX={{ angle: -50, verticalShift: 30, xAxisHeight: 70 }}
          showLegend={false}
        />
      )}
    </Card>
  );
};

export default WeeklyVisitsChart;
