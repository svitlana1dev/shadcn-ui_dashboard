"use client";

import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { Cell, Pie, ResponsiveContainer, PieChart } from "recharts";

const data = [
  {
    name: "Delta",
    value: 55,
    color: "#84cc16",
  },
  {
    name: "Alpha",
    value: 34,
    color: "#3b82f6",
  },
  {
    name: "Canary",
    value: 11,
    color: "#f97316",
  },
];

const TeamsDistributionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <TooltipProvider>
          <Tooltip>
            <Pie data={data} dataKey={"value"} nameKey="name">
              {data.map(({ value, color }) => {
                return <Cell key={value} fill={color} />;
              })}
            </Pie>
          </Tooltip>
        </TooltipProvider>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TeamsDistributionChart;
