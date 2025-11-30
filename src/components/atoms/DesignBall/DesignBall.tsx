import Image from "next/image";

interface DesignBallProps {
  className?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgSrc: string;
}
const DesignBall = ({
  className = "top-0 -left-28 -top-20 w-[300px] h-[262px]",
  imgHeight = 262,
  imgWidth = 300,
  imgSrc,
}: DesignBallProps) => {
  return (
    <div className={`${className} absolute rounded-full z-0`}>
      <Image
        src={imgSrc}
        alt="design balls"
        width={imgWidth}
        height={imgHeight}
        className="object-contain w-full h-full"
      />
    </div>
  );
};

export default DesignBall;
