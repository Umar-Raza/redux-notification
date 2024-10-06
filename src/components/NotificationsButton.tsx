import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { useAppSelector } from "@/store/hooks";
import { selectUnreadNotificationsCount } from "@/store/notificationSlice";

export const NotificationsButton = () => {
  const count = useAppSelector(selectUnreadNotificationsCount);

  return (
    <Button variant="outline" className=" relative" size="icon">
      <Bell className="h-4 w-4 relative" />
      <span className="absolute top-0 right-0 text-xs">{count}</span>
    </Button>
  );
};
