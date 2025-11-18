import BotIcon from "@/components/atoms/BotIcon/BotIcon";
import CodeSample from "@/components/molecules/CodeSample/CodeSample";
import MessageCardWrapper from "@/components/molecules/MessageCardWrapper/MessageCardWrapper";

const MessageContents = () => {
  return (
    <div className="space-y-[10.14px] p-[7.6px]">
      <MessageCardWrapper parentStyle="justify-end">
        I’m having trouble connecting my server. Can you help?
      </MessageCardWrapper>
      <div className="flex gap-1">
        <BotIcon />
        <MessageCardWrapper extraStyle="rounded-tl-[2.07px] w-[171.71px]">
          I&apos;d be happy to help! Let me check your configuration. First,
          make sure your server is properly configured in your settings.
          Here&apos;s what your config should look like:
          <CodeSample />
        </MessageCardWrapper>
      </div>
      <MessageCardWrapper parentStyle="justify-end">
        Thanks! What about error handling?
      </MessageCardWrapper>
      <div className="flex gap-1">
        <BotIcon />
        <MessageCardWrapper extraStyle="rounded-tl-[2.07px] w-fit">
          Thinking...
        </MessageCardWrapper>
      </div>
    </div>
  );
};

export default MessageContents;
