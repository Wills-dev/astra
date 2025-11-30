import Image from "next/image";

interface ChatFormButtonProps {
  iconSrc: string;
  altText: string;
  className?: string;
  size?: number;
}

const ChatFormButton = ({
  iconSrc,
  altText,
  className = "border-[#F0F1F1] border-[0.63px] h-[17.74px] w-[17.74px]",
  size = 10.14,
}: ChatFormButtonProps) => {
  return (
    <button
      className={`rounded-[3.8px] flex items-center justify-center ${className}`}
    >
      <Image
        src={iconSrc}
        alt={altText}
        width={size}
        height={size}
        className=" object-contain"
      />
    </button>
  );
};

export default ChatFormButton;
