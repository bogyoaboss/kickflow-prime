import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface CategoryButtonProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

const CategoryButton = ({ icon: Icon, label, active = false }: CategoryButtonProps) => {
  return (
    <Button
      variant={active ? "default" : "outline"}
      className="flex flex-col h-auto py-4 px-6 space-y-2 min-w-[120px]"
    >
      <Icon className="h-6 w-6" />
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
};

export default CategoryButton;
