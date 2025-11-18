import Image from "next/image";

interface ChatFormButtonProps {
  iconSrc: string;
  altText: string;
  className?: string;
}

const ChatFormButton = ({
  iconSrc,
  altText,
  className = "border-[#F0F1F1] border-[0.63px] h-[17.74px] w-[17.74px]",
}: ChatFormButtonProps) => {
  return (
    <button
      className={`rounded-[3.8px] flex items-center justify-center ${className}`}
    >
      <Image
        src={iconSrc}
        alt={altText}
        width={12}
        height={12}
        className="h-[10.14px] w-[10.14px] object-contain"
      />
    </button>
  );
};

export default ChatFormButton;
