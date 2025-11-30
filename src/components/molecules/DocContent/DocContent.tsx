import BotIcon from "@/components/atoms/BotIcon/BotIcon";
import DesignBall from "@/components/atoms/DesignBall/DesignBall";
import DocMessageContent from "../DocMessageContent/DocMessageContent";

const DocContent = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-[572px] w-full h-[745.64px] relative">
        <DesignBall imgSrc="/assets/images/design-ball.svg" />
        <DesignBall
          imgSrc="/assets/images/design-ball2.svg"
          imgHeight={203}
          imgWidth={197}
          className="-bottom-14 -right-24 w-[197px] h-[203px]"
        />
        <DesignBall
          imgSrc="/assets/images/design-ball2.svg"
          imgHeight={88.67}
          imgWidth={86.1}
          className="-bottom-14 -right-20 w-[86.1px] h-[88.67px]"
        />
        <div className="w-full h-full z-10 border-white/20 border py-[8.57px] px-[10.71px] rounded-[32.13px] bg-white/20 backdrop-blur ">
          <div className="bg-white h-full w-full rounded-[25.71px]">
            <div className="flex items-center gap-2 p-[12.85px]">
              <BotIcon className="w-[21.42px] h-[21.42px] min-w-[21.42px] min-h-[21.42px]" />
              <p className="text-xs text-[#333741] font-medium">Astra</p>
            </div>
            <DocMessageContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocContent;
