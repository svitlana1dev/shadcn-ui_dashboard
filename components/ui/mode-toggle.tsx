"use client";

import { useState } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";

export const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={handleModeToggle}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>

        <TooltipContent>
          {isDarkMode ? "Enable light mode" : "Enable dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
