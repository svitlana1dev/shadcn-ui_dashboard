import { PersonStandingIcon } from "lucide-react";

const MenuTitle = () => {
  return (
    <div className="flex items-center">
      <PersonStandingIcon size={40} className="text-primary" />
      <h4>Support Me</h4>
    </div>
  );
};

export default MenuTitle;
