import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import TeamsDistributionChart from "./teams-distribution-chart";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

const TeamsStats = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map(({ firstName, lastName }) => {
              return (
                <TooltipProvider key={firstName + lastName}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar>
                        <AvatarFallback>
                          {`${firstName[0]} ${lastName[0]}`}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {firstName + " " + lastName}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex gap-2 items-center">
            <TeamsDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex item-center gap-2">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">
          <TeamsDistributionChart />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamsStats;
