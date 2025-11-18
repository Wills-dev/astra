import Image from "next/image";

const BotIcon = () => {
  return (
    <div className="bg-linear-to-b from-0% from-[#9B22FF] to-100% to-[#D946F9] w-[16.55px] h-[16.55px] min-w-[16.55px] min-h-[16.55px] rounded-full flex items-center justify-center">
      <Image
        src="/assets/icons/bot.svg"
        alt="bot"
        width={16}
        height={16}
        className="w-[10.34px] h-[10.34px] object-contain"
      />
    </div>
  );
};

export default BotIcon;
