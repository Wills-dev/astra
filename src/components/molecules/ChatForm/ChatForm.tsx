import ChatFormButton from "@/components/atoms/ChatFormButton/ChatFormButton";

const ChatForm = () => {
  return (
    <div className="w-full h-[50.69px] bg-linear-to-r from-0% from-[#8F4EFF] to-100% to-[#EC82FA] rounded-[17.74px] flex items-end">
      <div className="bg-white h-[48.16px] w-full rounded-[15.21px] border-[0.32px] border-[#E8E8E8] flex items-center px-[10.14px] gap-1">
        <ChatFormButton
          iconSrc="/assets/icons/upload-icon.svg"
          altText="Attachment Icon"
        />
        <ChatFormButton iconSrc="/assets/icons/mic.svg" altText="Mic Icon" />
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
