import CardLayout from "../atoms/CardLayout/CardLayout";
import MessageWrapper from "../organisms/MessageWrapper/MessageWrapper";
import InfoBlock from "./InfoBlock/InfoBlock";

const HeroCardThree = () => {
  return (
    <CardLayout height="h-[488.83px]">
      <div className="flex flex-col justify-between">
        <MessageWrapper />
        <InfoBlock
          iconUrl="/assets/icons/book 2.svg"
          title="MCP Server"
          description="Our AI assistant explains configurations, helps troubleshoot issues, and generates code snippets tailored to your setup."
        />
      </div>
    </CardLayout>
  );
};

export default HeroCardThree;
