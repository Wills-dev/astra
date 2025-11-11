import Image from "next/image";

interface InfoBlockProps {
  iconUrl: string;
  title: string;
  description: string;
}

const InfoBlock = ({ iconUrl, title, description }: InfoBlockProps) => {
  return (
    <div className="space-y-1 px-[7.6px] py-[5.02px]">
      <div className="flex items-center gap-1">
        <Image
          src={iconUrl}
          alt={title}
          width={14}
          height={14}
          className="min-w-[11.41px] w-[11.41px] min-h-[11.41px] h-[11.41px] object-contain"
        />
        <h3 className="text-[10.14px] font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-gray-700 text-[8.87px] font-light">{description}</p>
    </div>
  );
};

export default InfoBlock;
