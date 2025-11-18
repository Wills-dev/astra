import Image from "next/image";

const CodeSample = () => {
  return (
    <div className="h-[138.61px] w-[155.16px] mt-1 ">
      <Image
        src="/assets/images/code-sample.svg"
        alt="code sample"
        width={155}
        height={139}
        className="object-contain w-full h-full"
      />
    </div>
  );
};

export default CodeSample;
