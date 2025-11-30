import Image from "next/image";

interface CodeSampleProps {
  className?: string;
  imgHeight?: number;
  imgWidth?: number;
  imgSrc?: string;
}

const CodeSample = ({
  className = "h-[138.61px] w-[155.16px]",
  imgHeight = 139,
  imgWidth = 155,
  imgSrc = "/assets/images/code-sample.svg",
}: CodeSampleProps) => {
  return (
    <div className={`${className} mt-1 `}>
      <Image
        src={imgSrc}
        alt="code sample"
        width={imgWidth}
        height={imgHeight}
        className="object-contain w-full h-full"
      />
    </div>
  );
};

export default CodeSample;
