import BotIcon from "@/components/atoms/BotIcon/BotIcon";
import CodeSample from "../CodeSample/CodeSample";
import MessageCardWrapper from "../MessageCardWrapper/MessageCardWrapper";
import ChatForm from "../ChatForm/ChatForm";

const DocMessageContent = () => {
  return (
    <div className="w-full bg-[#FAFAFA] border border-b-0 border-[#F0F1F1B2] pt-[12.85px] rounded-b-[25.71px] flex flex-col justify-between space-y-2">
      <div className="px-[12.85px] space-y-[17.14px]">
        <MessageCardWrapper
          parentStyle="justify-end"
          cardStyle="text-[12.24px] rounded-[15.7px] p-[14px] max-w-[212.45px] w-full leading-[18.36px]"
          extraStyle="rounded-tr-[3.5px]"
        >
          I’m having trouble connecting my server. Can you help?
        </MessageCardWrapper>
        <div className="flex gap-1">
          <BotIcon
            size={17.49}
            className="w-[27.97px] h-[27.97px] min-w-[27.97px] min-h-[27.97px]"
            imgClassName="w-[17.49px] h-[17.49px]"
          />
          <MessageCardWrapper
            cardStyle="text-[12.24px] rounded-[15.7px] p-[14px] max-w-[339px] w-full leading-[18.36px]"
            extraStyle="rounded-tl-[3.5px] "
          >
            I&apos;d be happy to help! Let me check your configuration. First,
            make sure your server is properly configured in your settings.
            Here&apos;s what your config should look like:
            <CodeSample
              imgSrc="/assets/images/image8.svg"
              imgHeight={234.31}
              imgWidth={262.29}
              className="w-[262.29px] h-[234.31px]"
            />
          </MessageCardWrapper>
        </div>
        <MessageCardWrapper
          parentStyle="justify-end"
          cardStyle="text-[12.24px] rounded-[15.7px] p-[14px] max-w-[212.45px] w-full leading-[18.36px]"
          extraStyle="rounded-tr-[3.5px]"
        >
          Thanks! What about error handling?
        </MessageCardWrapper>
        <div className="flex gap-1">
          <BotIcon
            size={17.49}
            className="w-[27.97px] h-[27.97px] min-w-[27.97px] min-h-[27.97px]"
            imgClassName="w-[17.49px] h-[17.49px]"
          />
          <MessageCardWrapper
            cardStyle="text-[12.24px] rounded-[15.7px] p-[14px] w-fit leading-[18.36px]"
            extraStyle="rounded-tl-[3.5px] "
          >
            Thinking...
          </MessageCardWrapper>
        </div>
      </div>
      <ChatForm
        parentStyle="h-[85.69px] rounded-[30px]"
        childStyle="px-[17.14px] h-[81.41px] rounded-[25.71px]"
        iconClassName="border-[#F0F1F1] border-[0.63px] h-[36px] w-[36px] rounded-[6px]"
      />
    </div>
  );
};

export default DocMessageContent;
