import GuideCardInfo from "@/components/molecules/GuideCardInfo/GuideCardInfo";

interface GuideLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const GuideLayout = ({ children, title, description }: GuideLayoutProps) => {
  return (
    <div className="max-w-[428px] w-full min-w-[300px] bg-[#FAFAFA] rounded-[16px] border border-gray-200 max-lg:overflow-hidden">
      <div className="w-full h-[260px] bg-[url('/assets/images/Lines.svg')] ">
        {children}
      </div>
      <div className="overflow-x-hidden sm:px-4 px-2">
        <GuideCardInfo title={title} desc={description} />
      </div>
    </div>
  );
};

export default GuideLayout;
