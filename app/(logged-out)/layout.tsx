import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4 p-24">
      {children}
    </div>
  );
};
export default LoggedOutLayout;
