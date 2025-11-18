import Image from "next/image";

interface TitleButtonProps {
  srcIcon: string;
  title: string;
  parentStyle?: string;
  childStyle?: string;
}

const TitleButton = ({
  title = "AI-powered experience",
  srcIcon = "/assets/icons/robot.svg",
  parentStyle = "bg-white/10 w-[216.32px] h-[31px]",
  childStyle = "text-sm text-gray-200",
}: TitleButtonProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-full ${parentStyle}`}
    >
      <Image
        src={srcIcon}
        alt="rocket-icon"
        width={16}
        height={16}
        className="w-4 h-4 object-contain"
      />
      <span className={childStyle}>{title}</span>
    </div>
  );
};

export default TitleButton;
