interface DashedLineProps {
  className?: string;
}

const DashedLine = ({
  className = "w-[232px] h-[107px] -left-[53px] top-[398px]",
}: DashedLineProps) => {
  return (
    <div
      className={`border rounded-[14px] absolute bottom-0 border border-dashed border-white/10 ${className}`}
    />
  );
};

export default DashedLine;
