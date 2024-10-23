import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";

const EmployeesStatus = () => {
  const totalEmployees = 100;
  const presentEmployees = 70;
  const presentEmployeesPercentage = (presentEmployees / totalEmployees) * 100;

  return (
    <div className="grid lg:grid-cols-3 gap-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Total employees</CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <UserIcon />
            <div className="text-5xl font-bold">{totalEmployees}</div>
          </div>
          <div>
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employees preset</CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {presentEmployeesPercentage > 75 ? (
              <UserCheck2Icon />
            ) : (
              <UserRoundXIcon />
            )}

            <div className="text-5xl font-bold">{presentEmployees}</div>
          </div>
        </CardContent>

        <CardFooter>
          {presentEmployeesPercentage > 75 ? (
            <span className="text-xs text-green-500 flex gap-1 items-center">
              <BadgeCheckIcon />
              {presentEmployeesPercentage}% of employees are present
            </span>
          ) : (
            <span className="text-xs text-red-500 flex gap-1 items-center">
              <AlertTriangleIcon />
              Only {presentEmployeesPercentage}% of employees are present
            </span>
          )}
        </CardFooter>
      </Card>

      <Card className="border-pink-500 flex flex-col">
        <CardHeader>
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-2 items-center">
          <Avatar>
            <AvatarFallback className="p-3">CM</AvatarFallback>
          </Avatar>

          <span className="text-2xl">Bob</span>
        </CardContent>

        <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
          <PartyPopperIcon className="text-pink-500" />
          <span>Congratulation, Bob!</span>
        </CardFooter>
      </Card>
    </div>
  );
};
export default EmployeesStatus;
