import ChatForm from "@/components/molecules/ChatForm/ChatForm";
import MessageContents from "../MessageContents/MessageContents";

const MessageWrapper = () => {
  return (
    <div className="flex-1 h-[403.28px] min-h-[403.28px] rounded-t-[10.14px] rounded-b-[15.21px] border-[#F0F1F1B2] border-[0.63px] bg-[#FAFAFA] overflow-y-auto">
      <MessageContents />
      <ChatForm />
    </div>
  );
};

export default MessageWrapper;
