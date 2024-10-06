import { NotificationsButton } from "./NotificationsButton";

export const Header = () => {
  return (
    <header className="px-2 py-1.5 h-12 flex justify-between items-center bg-slate-900">
      <span>Redux Notification</span>
       <NotificationsButton />
    </header>
  );
};
