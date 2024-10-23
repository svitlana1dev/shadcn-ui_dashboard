import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";

const MainMenu = () => {
  return (
    <div className="bg-muted overflow-auto p-4 flex flex-col h-full">
      <div className="flex items-center justify-between border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
        <ModeToggle />
      </div>

      <div className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>

      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="dark:bg-pink-800 bg-pink-300">
            TP
          </AvatarFallback>
        </Avatar>

        <Link href="/">Logout</Link>
      </div>
    </div>
  );
};

export default MainMenu;
