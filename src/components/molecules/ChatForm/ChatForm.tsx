import ChatFormButton from "@/components/atoms/ChatFormButton/ChatFormButton";

interface ChatFormProps {
  parentStyle?: string;
  childStyle?: string;
  size?: number;
  iconClassName?: string;
}

const ChatForm = ({
  parentStyle = "h-[50.69px] rounded-[17.74px]",
  childStyle = " h-[48.16px] px-[10.14px] rounded-[15.21px] border-[0.32px] border-[#E8E8E8]",
  size = 10.14,
  iconClassName = "border-[#F0F1F1] border-[0.63px] h-[17.74px] w-[17.74px]",
}: ChatFormProps) => {
  return (
    <div
      className={`w-full bg-linear-to-r from-0% from-[#8F4EFF] to-100% to-[#EC82FA]  flex items-end ${parentStyle}`}
    >
      <div className={` flex items-center gap-1 bg-white w-full ${childStyle}`}>
        <ChatFormButton
          iconSrc="/assets/icons/upload-icon.svg"
          altText="Attachment Icon"
          size={size}
          className={iconClassName}
        />
        <ChatFormButton
          iconSrc="/assets/icons/mic.svg"
          altText="Mic Icon"
          size={size}
          className={iconClassName}
        />
        <input
          type="text"
          placeholder="Type to chat..."
          className="flex-1 mx-[10.14px] outline-none text-[8.87px] text-gray-700 placeholder:text-[#D1D1D1]"
        />
        <ChatFormButton
          iconSrc="/assets/icons/send.svg"
          altText="Send Icon"
          className="bg-linear-to-b from-0% from-[#9B22FF] to-100% to-[#D946F9] w-[20.28px] h-[20.28px] min-w-[20.28px] min-h-[20.28px]"
        />
      </div>
    </div>
  );
};

export default ChatForm;
