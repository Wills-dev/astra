import { notificationItems } from "@/lib/constants";

import NotificationItem from "../NotificationItem/NotificationItem";

const NotificationWrapper = () => {
  return (
    <div className="text-gray-700 text-[7.6px]">
      {notificationItems.map((item, index) => (
        <NotificationItem
          key={item.id}
          index={index}
          length={notificationItems?.length}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default NotificationWrapper;
