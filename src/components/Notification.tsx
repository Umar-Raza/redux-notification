import { NotificationItem } from "@/types";
import { Button } from "./ui/button";
import { Circle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { markAsRead, selectNotifications } from "@/store/notificationSlice";

export const Notification = () => {
  const notifications: NotificationItem[] = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-lg mx-auto">
      <ul className="flex flex-col gap-4 my-10">
        {notifications.map((notificationItem) => {
          return (
            <li
              key={notificationItem.id}
              className="border rounded-md flex px-3 py-2 justify-between justify-items-center"
            >
              <div className="flex flex-col justify-center">
                {notificationItem.text}
              </div>

              <Button
                onClick={() => {
                  dispatch(markAsRead(notificationItem.id));
                }}
                variant="outline"
                className={notificationItem.read ? "invisible" : "visible"}
                size="icon"
              >
                <Circle />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
