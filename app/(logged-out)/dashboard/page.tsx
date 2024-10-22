"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 19000, 3000, 5000, 20000, 30000],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("analytics");

  return (
    <>
      <SidebarProvider>
        <Sidebar className="p-4">
          <SidebarContent className="p-4">
            <button
              className="w-full py-2 text-left hover:bg-gray-700"
              onClick={() => setActiveSection("analytics")}
            >
              Analytics
            </button>
            <button
              className="w-full py-2 text-left hover:bg-gray-700"
              onClick={() => setActiveSection("user-management")}
            >
              User Management
            </button>
            <button
              className="w-full py-2 text-left hover:bg-gray-700"
              onClick={() => setActiveSection("reports")}
            >
              Reports
            </button>
          </SidebarContent>
        </Sidebar>

        <main className="p-8 space-y-6 flex-grow">
          <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className="grid grid-cols-4 gap-6">
              <Card className="p-6">
                <h2 className="text-sm font-medium text-gray-500">
                  Total Users
                </h2>
                <p className="text-2xl font-semibold">1,200</p>
              </Card>

              <Card className="p-6">
                <h2 className="text-sm font-medium text-gray-500">
                  Active Sessions
                </h2>
                <p className="text-2xl font-semibold">320</p>
              </Card>

              <Card className="p-6">
                <h2 className="text-sm font-medium text-gray-500">Revenue</h2>
                <p className="text-2xl font-semibold">$45,000</p>
              </Card>

              <Card className="p-6">
                <h2 className="text-sm font-medium text-gray-500">
                  New Signups
                </h2>
                <p className="text-2xl font-semibold">85</p>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">Revenue Over Time</h2>
              <Bar data={data} />
            </Card>
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
