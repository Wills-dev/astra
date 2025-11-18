import Image from "next/image";

import Button from "@/components/atoms/Button/Button";

const WaitListForm = () => {
  return (
    <div className="pt-4">
      <form className="bg-white/10 max-w-[449px] w-full border-white/10 border p-1 pr-0.5 pl-5 rounded-full flex items-center justify-between h-12">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/message.svg"
            alt="Message Icon"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
          <input
            type="text"
            placeholder="example@gmail.com"
            className=" placeholder:text-[14px] placeholder:text-[#FAFAFA]"
          />
        </div>
        {/* mobile view */}
        <div className="sm:hidden">
          <Button>Join</Button>
        </div>
        {/* Desktop view */}
        <div className="max-sm:hidden">
          <Button>Join the waitlist</Button>
        </div>
      </form>
    </div>
  );
};

export default WaitListForm;
