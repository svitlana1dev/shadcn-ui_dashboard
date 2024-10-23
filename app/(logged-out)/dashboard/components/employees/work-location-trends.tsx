"use client";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];

const WorkLocationTrends = () => {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888" font-size={12} />
        <YAxis stroke="#888" font-size={12} />
        <Tooltip
          separator=": "
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "Work from home"];
            } else if (name === "office") {
              return [value, "Work from office"];
            }
          }}
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bd-black rounded-md"
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "wfh") {
              return <div className="text-sm">Work from home</div>;
            } else if (value === "office") {
              return <div className="text-sm">Work from office</div>;
            }
          }}
        />
        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WorkLocationTrends;
