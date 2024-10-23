import { FC, ReactNode } from "react";
import MainMenu from "./components/main-menu";

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen w-full gap-4">
      <div className="bg-muted overflow-auto">
        <MainMenu />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
