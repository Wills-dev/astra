import Image from "next/image";

import CardLayout from "@/components/atoms/CardLayout/CardLayout";
import InfoBlock from "../InfoBlock/InfoBlock";
import NotificationWrapper from "../NotificationWrapper/NotificationWrapper";

const HeroCardTwo = () => {
  return (
    <CardLayout>
      <div className="h-[155.69px] border-[#F0F1F1B2] rounded-[10.14px] border-[0.63px] bg-[#FAFAFA]">
        <div className="h-full w-full space-y-2 pl-2 py-3">
          <div className="flex items-center gap-1 ">
            <p className="text-[7.24px] text-gray-700">Today</p>
            <Image
              src="/assets/icons/chevron-down.svg"
              alt="chevron-down"
              width={10}
              height={10}
              className="object-contain"
            />
          </div>
          <NotificationWrapper />
        </div>
      </div>
      <InfoBlock
        iconUrl="/assets/icons/book.svg"
        title="Updates"
        description="Stay effortlessly up to date. The assistant highlights new releases, API changes, and migration steps ensuring your team never misses critical updates."
      />
    </CardLayout>
  );
};

export default HeroCardTwo;
