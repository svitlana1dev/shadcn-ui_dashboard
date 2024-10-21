import { ReactNode } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

type Props = {
  children?: ReactNode;
};

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center gap-4 p-24">
        {children}
      </div>

      <div className="fixed top-[calc(50%-12px)] right-2">
        <ModeToggle />
      </div>
    </>
  );
};
export default LoggedOutLayout;
