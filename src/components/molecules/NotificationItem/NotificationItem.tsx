import Image from "next/image";

interface NotificationItemProps {
  title: string;
  description: string;
  length: number;
  index: number;
}

const NotificationItem = ({
  title,
  description,
  length,
  index,
}: NotificationItemProps) => {
  const isNotLast = index !== length - 1;
  return (
    <div
      className={`flex items-center gap-1 overflow-x-hidden relative ${
        isNotLast ? `pb-3` : ""
      }`}
    >
      {isNotLast && (
        <div className="absolute border-dashed border-l border-gray-300 h-full top-0 left-2" />
      )}
      <div className="w-[17.74px] h-[17.74px] min-w-[17.74px] min-h-[17.74px] rounded-full bg-[#F0F1F1] flex items-center justify-center z-10">
        <Image
          src="/assets/icons/bell.svg"
          alt="chevron-down"
          width={10}
          height={10}
          className="object-contain h-[10.14px] w-[10.14px] min-w-[10.14px] min-h-[10.14px]"
        />
      </div>
      <p className="whitespace-nowrap">{title}</p>
      <p className="whitespace-nowrap py-[2.53px] px-[3.8px] bg-white border-[0.63px] border-[#F0F1F1] rounded-[2.53px]">
        {description}
      </p>
    </div>
  );
};

export default NotificationItem;
