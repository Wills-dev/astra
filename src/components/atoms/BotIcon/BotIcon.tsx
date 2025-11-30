import Image from "next/image";

interface BotIconProps {
  size?: number;
  className?: string;
  imgClassName?: string;
}

const BotIcon = ({
  size = 10,
  className = "w-[16.55px] h-[16.55px] min-w-[16.55px] min-h-[16.55px]",
  imgClassName = "w-[10.34px] h-[10.34px]",
}: BotIconProps) => {
  return (
    <div
      className={`bg-linear-to-b from-0% from-[#9B22FF] to-100% to-[#D946F9] rounded-full flex items-center justify-center ${className}`}
    >
      <Image
        src="/assets/icons/bot.svg"
        alt="bot"
        width={size}
        height={size}
        className={`${imgClassName} object-contain`}
      />
    </div>
  );
};

export default BotIcon;
