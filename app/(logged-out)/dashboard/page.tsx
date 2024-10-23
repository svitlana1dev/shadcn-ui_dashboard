import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStatus from "./components/employees-status";

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees" className="mb-4">
      <TabsList>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>

      <TabsContent value="employees">
        <EmployeesStatus />
      </TabsContent>
      <TabsContent value="teams">Teams stats view</TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
