import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-600" />
        <h1>SupportMe</h1>
      </div>

      <p>Dashboard</p>

      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <p>or</p>
        <Button asChild variant="outline">
          <Link href="/login">Sing up</Link>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
